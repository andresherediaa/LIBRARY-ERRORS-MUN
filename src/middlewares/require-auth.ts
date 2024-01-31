import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

interface UserPayload {
    id: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.session?.jwt) {
        // Si no hay un token JWT en la sesión, devolver Unauthorized
        throw new NotAuthorizedError();
    }

    try {
        const payload = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!
        ) as UserPayload;
        req.user= payload;
    } catch (err) {
        // Manejar errores al decodificar el token (puedes personalizar esto según tus necesidades)
        throw new NotAuthorizedError();
    }

    next();
};

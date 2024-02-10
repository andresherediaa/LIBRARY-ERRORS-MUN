import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

interface UserAttrs {
    email: string;
    password: string;
    isAdmin: boolean;
    name: string;
    phone: string;
    image?: string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserAttrs;
        }
    }
}

export const requireAuth = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.session?.jwt) {
        console.log("error 1 en common", req.session?.jwt);
        // Si no hay un token JWT en la sesión, devolver Unauthorized
        throw new NotAuthorizedError();
    }

    try {
        const payload = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!
        ) as UserAttrs;
        req.currentUser = payload;
    } catch (err) {
        console.log("error 2 en common", err);
        throw new NotAuthorizedError();
    }

    next();
};

import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import jwt from "jsonwebtoken";

interface UserAttrs {
    id: string;
    email: string;
    password: string;
    isAdmin: boolean;
    name: string;
    phone: string;
    image?: string;
    institucion_terminal: string;
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
    // Extraer el JWT del encabezado de autorización
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        throw new NotAuthorizedError();
    }

    const token = authorizationHeader.split(" ")[1];

    try {
        // Verificar y decodificar el JWT
        const payload = jwt.verify(token, process.env.JWT_KEY!) as UserAttrs;
        req.currentUser = payload;
    } catch (err) {
        console.log("Error al verificar el token:", err);
        throw new NotAuthorizedError();
    }

    next();
};


export const requireAuthAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Extraer el JWT del encabezado de autorización
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        throw new NotAuthorizedError();
    }

    const token = authorizationHeader.split(" ")[1];

    try {
        // Verificar y decodificar el JWT
        const payload = jwt.verify(token, process.env.JWT_KEY!) as UserAttrs;
        req.currentUser = payload;
        if (!payload.isAdmin) {
            throw new NotAuthorizedError();
        }
    } catch (err) {
        console.log("Error al verificar el token:", err);
        throw new NotAuthorizedError();
    }

    next();
};

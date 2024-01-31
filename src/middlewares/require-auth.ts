import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
  type: string;
}
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}


export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("7777777777", !req.session?.jwt, req.session);
  
  if (!req.session?.jwt) {//no se ejcuta si existe jwt
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {

  }

  next();
};

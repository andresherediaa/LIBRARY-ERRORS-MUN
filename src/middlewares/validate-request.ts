import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';


export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Extraer el primer error y sus detalles personalizados (typeError y userMsg)
    const msg = errors.array()[0].msg; // Primer error encontrado
    const typeError = msg.msg.typeMsg || "SINTAX";
    const userMsg = msg.msg.userMsg || "Error de validación en la solicitud";

    // Lanzar RequestValidationError con los campos personalizados
    throw new RequestValidationError(msg, userMsg, typeError);
  }

  next();
};

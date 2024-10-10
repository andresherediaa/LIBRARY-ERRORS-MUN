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
    const firstError = errors.array()[0]; // Primer error encontrado
    const typeError = firstError.msg.typeMsg || "SINTAX";
    const userMsg = firstError.msg.userMsg || "Error de validación en la solicitud";

    // Lanzar RequestValidationError con los campos personalizados
    throw new RequestValidationError(errors.array(), userMsg, typeError);
  }

  next();
};

import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { ErrorController } from '../errors/erroresStatus';
import { ErrorCategories } from '../events/types/instituciones-pagos';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("VALIDATE REQUEST1111111", errors.array()[0]);
    // Extraer el primer error y sus detalles personalizados (typeError y userMsg)
    const msg = errors.array()[0].msg; // Primer error encontrado
    const typeMsg = ErrorCategories.SINTAX;
    const userMsg = ErrorController.getErrorMessage(ErrorCategories.SINTAX);

    // Lanzar RequestValidationError con los campos personalizados
    throw new RequestValidationError(msg, typeMsg, userMsg);
  }

  next();
};

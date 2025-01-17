import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { ErrorController } from '../errors/erroresStatus';
import { ErrorCategories } from '../events/types/instituciones-pagos';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500; // Código de estado por defecto para errores genéricos
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }
  res.status(statusCode).send(
    {
      status: ErrorController.getGeneralStatus(statusCode.toString()) || "error",
      msg: err.message,// Agregar el código de estado al objeto de errores
      code: statusCode,
      typeMsg: ErrorCategories.MIDDLEWARE,
      userMsg: ErrorController.getErrorMessage("MIDDLEWARE")
    },
  );
};


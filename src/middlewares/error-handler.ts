import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { ErrorController } from '../errors/erroresStatus';
import {apmInstance} from './apm';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //ELK LOGS
  apmInstance.captureError(err);
  // Manejo de errores personalizados
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.serializeErrors());
  }

  // Manejo de errores genéricos
  const statusCode = 400; // Código de estado por defecto para errores genéricos
  res.status(statusCode).send(
    {
      status: ErrorController.getGeneralStatus(statusCode.toString()),
      msg: err.message,// Agregar el código de estado al objeto de errores
      code: statusCode
    },
  );
};


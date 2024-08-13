import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Manejo de errores personalizados
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // Manejo de errores genéricos
  const statusCode = 400; // Código de estado por defecto para errores genéricos
  res.status(statusCode).send({
    errors: [{
      msg: err.message,
      status: statusCode // Agregar el código de estado al objeto de errores
    }],
  });
};


import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { ErrorController } from '../errors/erroresStatus';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500; // Código de estado por defecto para errores genéricos
  if (err instanceof CustomError) {
    console.log("ENTRA A CUSTOM ERROR******");
    return res.status(err.statusCode).send(err.serializeErrors());
  }
  console.log("NO===> ENTRA A CUSTOM ERROR");
  res.status(statusCode).send(
    {
      status: ErrorController.getGeneralStatus(statusCode.toString()),
      msg: err.message,// Agregar el código de estado al objeto de errores
      code: statusCode,
      typeError: "Middleware",
      userMsg: "Hemos encontrado un problema al procesar su solicitud. Inténtelo nuevamente más tarde o contacte al soporte si el problema persiste."
    },
  );
};


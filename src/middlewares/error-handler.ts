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
    console.log("instacoia de custom Error");
    return res.status(err.statusCode).send(err.serializeErrors());
  }
  console.log("dorecto  Error");
  res.status(statusCode).send(
    {
      status: ErrorController.getGeneralStatus(statusCode.toString()) || "error",
      msg: err.message,// Agregar el código de estado al objeto de errores
      code: statusCode,
      typeError: "MIDDLEWARE",
      userMsg: ErrorController.getErrorMessage("MIDDLEWARE")
    },
  );
};


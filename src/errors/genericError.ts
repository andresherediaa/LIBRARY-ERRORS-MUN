import { CustomError } from './custom-error'; // Asegúrate de importar tu clase base
import { ErrorController } from './erroresStatus';

export class GenericError extends CustomError {
 statusCode: number;

 constructor(
  public msg: string,         // Mensaje principal del error
  public code: string = "500", // Código de estado (por defecto 500)
  public typeError: string = "INTERNAL_SERVER_ERROR", // Tipo de error opcional
  public userMsg: string = "Hemos encontrado un problema. Inténtelo nuevamente más tarde." // Mensaje amigable para el usuario
 ) {
  super(msg, typeError, userMsg);
  this.statusCode = parseInt(code); // Convertir el código a número para HTTP
  this.msg = ErrorController.getErrorMessage(code)  || this.message;
  Object.setPrototypeOf(this, GenericError.prototype);
 }

 serializeErrors() {
  return {
   msg: this.message,
   status: ErrorController.getGeneralStatus(this.statusCode.toString()),
   code: this.code.toString(),
   typeError: this.typeError,
   userMsg: this.userMsg
  };
 }
}

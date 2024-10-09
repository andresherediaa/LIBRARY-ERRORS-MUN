import { ErrorCategories } from '../events/types/instituciones-pagos';
import { CustomError } from './custom-error'; // Asegúrate de importar tu clase base
import { ErrorController } from './erroresStatus';

export class GenericError extends CustomError {
 statusCode: number;

 constructor(
  public msg: string,
  public httpStatus: number,// Mensaje principal del error
  public code: string = "500", // Código de estado (por defecto 500)
  public typeError: string = ErrorCategories.MIDDLEWARE, // Tipo de error opcional
  public userMsg: string = ErrorController.getErrorMessage(ErrorCategories.MIDDLEWARE) // Mensaje amigable para el usuario
 ) {
  super(msg, typeError, userMsg);
  this.statusCode = this.httpStatus;
  this.msg = ErrorController.getErrorMessage(code) || this.message;
  this.typeError = this.typeError;
  this.userMsg = this.userMsg;
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



export class ValidationError extends CustomError {
 statusCode = 400;

 constructor(msg: string, public userMsg: string) {
  super(msg, "VALIDATION_ERROR", userMsg);
  Object.setPrototypeOf(this, ValidationError.prototype);
 }

 serializeErrors() {
  return {
   msg: this.message,
   status: "validation_failed",
   code: "VALIDATION_ERROR",
   typeError: this.typeError,
   userMsg: this.userMsg,
  };
 }
}

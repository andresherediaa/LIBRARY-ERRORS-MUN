import { ErrorCategories } from '../events/types/instituciones-pagos';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(
    public msg: string,
    public httpStatus: number,// Mensaje principal del error
    public code: string = "500", // Código de estado (por defecto 500)
    public typeMsg: string = ErrorCategories.MIDDLEWARE, // Tipo de error opcional
    public userMsg: string = ErrorController.getErrorMessage(ErrorCategories.MIDDLEWARE) // Mensaje amigable para el usuario
  ) {
    super(msg, typeMsg, userMsg);
    this.statusCode = this.httpStatus;
    this.msg = ErrorController.getErrorMessage(code) || this.message;
    this.typeMsg = this.typeMsg;
    this.userMsg = this.userMsg;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return {
      msg: this.message,
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      code: this.code.toString(),
      typeMsg: this.typeMsg,
      userMsg: this.userMsg
    };
  }
}

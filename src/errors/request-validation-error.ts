import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(
    public msg: string,
    public code: string = "500",
    typeMsg: string,
    userMsg: string
  ) {
    super(msg, typeMsg, userMsg);
    this.msg = ErrorController.getErrorMessage(code) || this.message;

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return {
      msg: this.message,
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      code: this.code.toString(),
      typeMsg: this.typeMsg, // Añadir typeError
      userMsg: this.userMsg,     // Añadir userMsg
    };
  }
}

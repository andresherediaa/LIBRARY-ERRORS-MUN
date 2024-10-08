import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor(
    typeError?: string,
    userMsg?: string
  ) {
    super('Not Authorized', typeError, userMsg);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return {
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      msg: ErrorController.getErrorMessage(this.statusCode.toString()),
      code: this.statusCode.toString(),
      typeError: this.typeError, // Añadir typeError
      userMsg: this.userMsg,     // Añadir userMsg
    };
  }
}

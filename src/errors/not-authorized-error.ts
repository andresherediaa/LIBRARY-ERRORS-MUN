import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;
  constructor(
    typeMsg: string,
    userMsg: string
  ) {
    super('Not Authorized', typeMsg, userMsg);
    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return {
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      msg: ErrorController.getErrorMessage(this.statusCode.toString()),
      code: this.statusCode.toString(),
      typeMsg: this.typeMsg, // Añadir typeError
      userMsg: this.userMsg,     // Añadir userMsg
    };
  }
}

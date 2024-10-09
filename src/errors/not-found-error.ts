import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found', "","");
    this.typeMsg = this.typeMsg;
    this.userMsg = this.userMsg;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return {
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      msg: ErrorController.getErrorMessage(this.statusCode.toString()),
      code: this.statusCode.toString(),
      typeMsg: this.typeMsg,
      userMsg: this.userMsg
    };
  }
}

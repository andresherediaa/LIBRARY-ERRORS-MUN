import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class BadRequestError extends CustomError {
  public statusCode:number = 400;

  constructor(public msg: string, statusCode?: number ) {
    super(msg);
    this.statusCode = statusCode ? this.statusCode : 400;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return { status: ErrorController.getGeneralStatus(this.statusCode.toString()), msg: this.message, code: this.statusCode.toString() };
  }
}

import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  public statusCode:number = 400;

  constructor(public msg: string, statusCode?: number ) {
    super(msg);
    this.statusCode = statusCode ? this.statusCode : 400;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ msg: this.message, status: this.statusCode }];
  }
}

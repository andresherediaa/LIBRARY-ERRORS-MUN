import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  public statusCode:number = 400;

  constructor(public message: string, statusCode?: number ) {
    super(message);
    this.statusCode = statusCode ? this.statusCode : 400;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

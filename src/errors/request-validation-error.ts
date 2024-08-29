import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return { status: ErrorController.getGeneralStatus(this.statusCode.toString()), msg: this.errors[0].msg, field: this.errors[0].param, code: this.statusCode.toString() };
  }
}

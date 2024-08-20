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
    console.log("22222222", this.errors);
    return this.errors.map(err => {
      return { status: ErrorController.getGeneralStatus(this.statusCode.toString()), msg: err.msg, field: err.param };
    });
  }
}

import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return { status: ErrorController.getGeneralStatus(this.statusCode.toString()), msg: ErrorController.getGeneralStatus(this.statusCode.toString()) };
  }
}

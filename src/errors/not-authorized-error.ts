import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return { status: ErrorController.getGeneralStatus(this.statusCode.toString()), msg: ErrorController.getErrorMessage(this.statusCode.toString()) };
  }
}

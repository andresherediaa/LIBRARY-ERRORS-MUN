import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to db');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return { msg: this.reason , status: ErrorController.getGeneralStatus(this.statusCode.toString()), code: this.statusCode.toString() };
  }
}

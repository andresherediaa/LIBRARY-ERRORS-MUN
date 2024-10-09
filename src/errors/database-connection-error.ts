import { ErrorCategories } from '../events/types/instituciones-pagos';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor(
    public typeMsg: string = ErrorCategories.MIDDLEWARE,
    public userMsg: string = ErrorController.getErrorMessage(ErrorCategories.MIDDLEWARE)
  ) {
    super('Error connecting to db',"","");
    this.typeMsg = this.typeMsg;
    this.userMsg = this.userMsg;
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return {
      msg: this.reason,
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      code: this.statusCode.toString(),
      typeMsg: this.typeMsg,
      userMsg: this.userMsg
    };
  }
}

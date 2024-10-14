import { ErrorCategories } from '../events/types/instituciones-pagos';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found', ErrorCategories.MIDDLEWARE , ErrorController.getErrorMessage(ErrorCategories.MIDDLEWARE));
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

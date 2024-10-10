import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';
import { ErrorCategories } from '../events/types/instituciones-pagos';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(
    public msg: string,
    public typeMsg: string = ErrorCategories.SINTAX,
    public userMsg: string = ErrorController.getErrorMessage(ErrorCategories.SINTAX)
  ) {
    super(msg, typeMsg, userMsg);
    Object.setPrototypeOf(this, RequestValidationError.prototype);  // Verifica que el prototipo se establezca correctamente
  }

  serializeErrors() {
    return {
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      msg: this.msg,
      code: this.statusCode.toString(),
      typeMsg: this.typeMsg,
      userMsg: this.userMsg,
    };
  }
}


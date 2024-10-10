import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';
import { ErrorController } from './erroresStatus';
import { ErrorCategories } from '../events/types/instituciones-pagos';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(
    public errors: any,
    public typeMsg: string = ErrorCategories.SINTAX, 
    public userMsg: string = ErrorController.getErrorMessage(ErrorCategories.SINTAX)
  ) {
    super('Invalid request parameters', "", "");
    this.typeMsg = this.typeMsg;
    this.userMsg = this.userMsg;
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }


  serializeErrors() {
    console.log("******1111********", this.errors);
    return {
      status: ErrorController.getGeneralStatus(this.statusCode.toString()),
      msg: this.errors.msg,
      code: this.statusCode.toString(),
      typeMsg: this.typeMsg,
      userMsg: this.userMsg
    };
  }

}

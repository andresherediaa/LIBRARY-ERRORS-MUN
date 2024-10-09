export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(msg: string, public typeMsg: string, public userMsg: string) {
    super(msg);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    msg: string;
    status: string;
    code: string;
    typeMsg: string; // Opcional
    userMsg: string;   // Opcional
  };
}

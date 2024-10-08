export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(msg: string, public typeError?: string, public userMsg?: string) {
    super(msg);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): {
    msg: string;
    status: string;
    code: string;
    typeError?: string; // Opcional
    userMsg?: string;   // Opcional
  };
}

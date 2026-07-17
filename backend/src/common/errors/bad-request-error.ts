import { AppError } from "./app-error.js";

export class BadRequestError extends AppError {
  constructor(message: string) {
    super(400, message);
  }
}
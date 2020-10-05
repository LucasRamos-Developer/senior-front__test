export class DefaultResponse<T> {
  message: string;
  errors: Array<string>;
  data: T;
}
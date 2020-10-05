export class PaginationResponse<T> {
  type: string;
  msg: string;
  size: number;
  page: number;
  totalPages: number;
  totalElements: number;
  data: Array<T>;
}
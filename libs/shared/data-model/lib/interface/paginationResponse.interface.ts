export interface IPaginationResponse<T> {
  size: number;
  page: number;
  totalPages: number;
  data: T[];
}
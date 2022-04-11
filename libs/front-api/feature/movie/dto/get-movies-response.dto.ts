import { IPaginationResponse } from '@fullstack-challenge/shared/data-model';
import { MovieDto } from './movie.dto';

export class GetMoviesResponseDto implements IPaginationResponse<MovieDto> {
  size: number;
  page: number;
  totalPages: number;
  totalRows: number;
  data: MovieDto[];
}

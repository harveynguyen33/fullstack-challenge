import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetMoviesRequestDto, GetMoviesResponseDto } from './dto';
import { MovieService } from './movie.service';

@ApiTags('Movie')
@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) { }

  @Get()
  @ApiResponse({ type: GetMoviesResponseDto })
  getList(@Query() queries: GetMoviesRequestDto) {
    return this.movieService.getList(queries);
  }
}

import { Module } from '@nestjs/common';

import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule { }

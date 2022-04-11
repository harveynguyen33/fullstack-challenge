import { RouterModule } from 'nest-router';
import { Module } from '@nestjs/common';

import { routes } from '../routes';
import { MovieModule } from '@fullstack-challenge/front-api/feature/movie';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    MovieModule
  ],
  providers: [],
})
export class AppModule {}

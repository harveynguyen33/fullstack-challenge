import { Routes } from 'nest-router';

import { MovieModule } from '@fullstack-challenge/front-api/feature/movie';

export const routes: Routes = [
  {
    path: '/v1',
    children: [MovieModule],
  },
];

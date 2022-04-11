
import { GENRE, IMovie } from '@fullstack-challenge/shared/data-model';

export class MovieDto implements IMovie {
  name: string;
  genre: GENRE;
  leadStudio: string;
  audienceScore: number;
  profitability: number;
  rt: number;
  wg: string;
  year: number;
}

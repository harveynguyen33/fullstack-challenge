import { GENRE } from "../enum";

export interface IMovie {
  name: string;
  genre: GENRE;
  leadStudio: string;
  audienceScore: number;
  profitability: number;
  rt: number;
  wg: string;
  year: number;
}

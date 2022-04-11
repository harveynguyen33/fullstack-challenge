import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { GetMoviesRequestDto } from './dto/get-movies-request.dto';
import { GetMoviesResponseDto } from './dto/get-movies-response.dto';
import { MovieDto } from './dto';
import { GENRE } from '@fullstack-challenge/shared/data-model';

@Injectable()
export class MovieService {
  private _movieCollection: MovieDto[]
  constructor() {
    const data: MovieDto[] = fs.readFileSync(path.join(__dirname, './data/movies.csv'), 'utf8').trim().split('\n')
      .map(line => {
        const [name, genre, leadStudio, audienceScore, profitability, rt, wg, year] = line.split(',')
        return {
          name: name.trim(),
          genre: genre.trim() as GENRE,
          leadStudio: leadStudio.trim(),
          audienceScore: Number(audienceScore.trim()),
          profitability: Number(profitability.trim()),
          rt: Number(rt.trim()),
          wg: wg.trim(),
          year: Number(year.trim())
        }
      })
    this._movieCollection = data;
  }

  async getList(queries: GetMoviesRequestDto): Promise<GetMoviesResponseDto> {
    const page = queries.page || 0;
    const size = queries.size || 10;
    const collectionLength = this._movieCollection.length;
    const totalPages = Math.floor(collectionLength / size);
    const data = this._movieCollection.slice(page * size, (page * size) + size);
    return {
      page,
      size,
      totalPages,
      totalRows: collectionLength,
      data
    }
  }
}
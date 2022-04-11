import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { IPaginationRequest } from '@fullstack-challenge/shared/data-model';

export class GetMoviesRequestDto implements IPaginationRequest {
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  size?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  page?: number;
}

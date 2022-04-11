import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

const mockService = () => ({
  getList: jest.fn(),
});
describe('MovieController', () => {
  let controller: MovieController;
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        {
          provide: MovieService,
          useFactory: mockService,
        },
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    service = module.get<MovieService>(MovieService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Check call proper service with 1 parameter', () => {
    [
      {
        ctrlFnName: 'getList',
        servFnName: 'getList',
        params: {
          dto: 'value dto for getList movie',
        },
      },
    ].forEach(({ ctrlFnName, servFnName, params }) => {
      it(`Should call ${ctrlFnName} with 1 parameter`, () => {
        controller[ctrlFnName](params.dto);
        expect(service[servFnName]).toHaveBeenCalledTimes(1);
        expect(service[servFnName]).toHaveBeenCalledWith(params.dto);
      });
    });
  });

  describe('Check call failed controller', () => {
    it(`Should call getList movies failed`, async () => {
      jest.spyOn(service, 'getList').mockRejectedValue(new Error());
      try {
        await controller.getList({});
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
      }
    });
  });
});

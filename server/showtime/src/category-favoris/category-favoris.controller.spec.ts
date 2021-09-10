import { Test, TestingModule } from '@nestjs/testing';
import { CategoryFavorisController } from './category-favoris.controller';

describe('CategoryFavorisController', () => {
  let controller: CategoryFavorisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryFavorisController],
    }).compile();

    controller = module.get<CategoryFavorisController>(CategoryFavorisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

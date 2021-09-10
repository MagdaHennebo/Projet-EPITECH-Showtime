import { Test, TestingModule } from '@nestjs/testing';
import { CategoryFavorisService } from './category-favoris.service';

describe('CategoryFavorisService', () => {
  let service: CategoryFavorisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryFavorisService],
    }).compile();

    service = module.get<CategoryFavorisService>(CategoryFavorisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

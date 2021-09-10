import { Test, TestingModule } from '@nestjs/testing';
import { ArtistFavorisService } from './artist-favoris.service';

describe('ArtistFavorisService', () => {
  let service: ArtistFavorisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistFavorisService],
    }).compile();

    service = module.get<ArtistFavorisService>(ArtistFavorisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

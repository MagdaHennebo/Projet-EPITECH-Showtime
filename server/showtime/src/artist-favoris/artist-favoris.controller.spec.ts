import { Test, TestingModule } from '@nestjs/testing';
import { ArtistFavorisController } from './artist-favoris.controller';

describe('ArtistFavorisController', () => {
  let controller: ArtistFavorisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistFavorisController],
    }).compile();

    controller = module.get<ArtistFavorisController>(ArtistFavorisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { ArtistFavorisService } from './artist-favoris.service';
import { ArtistFavorisController } from './artist-favoris.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ArtistFavoris,
  ArtistFavorisSchema,
} from './schemas/artist-favoris.schema';

@Module({
  providers: [ArtistFavorisService],
  controllers: [ArtistFavorisController],
  imports: [
    MongooseModule.forFeature([
      { name: ArtistFavoris.name, schema: ArtistFavorisSchema },
    ]),
  ],
})
export class ArtistFavorisModule {}

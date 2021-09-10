import { BaseArtistDto } from './base-artist.dto';

export class UpdateArtistDto extends BaseArtistDto {
  completedAt: Date;
}

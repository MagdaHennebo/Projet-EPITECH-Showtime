import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Wishlist, WishlistSchema } from './schemas/wishlist.schema';

@Module({
  providers: [WishlistService],
  controllers: [WishlistController],
  imports: [
    MongooseModule.forFeature([
      { name: Wishlist.name, schema: WishlistSchema },
    ]),
  ],
})
export class WishlistModule {}

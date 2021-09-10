import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CategoryModule } from './category/category.module';
import { CategoryFavorisModule } from './category-favoris/category-favoris.module';
import { TicketModule } from './ticket/ticket.module';
import { LocationModule } from './location/location.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ArtistModule } from './artist/artist.module';

import { ArtistFavorisModule } from './artist-favoris/artist-favoris.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://showtime:showtimepassword@cluster0.dp99n.mongodb.net/showtimedb?retryWrites=true&w=majority',
    ),
    UserModule,
    EventModule,
    WishlistModule,
    CategoryModule,
    CategoryFavorisModule,
    TicketModule,
    LocationModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    ArtistModule,
    ArtistFavorisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CategoryFavorisService } from './category-favoris.service';
import { CategoryFavorisController } from './category-favoris.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryFavoris,
  CategoryFavorisSchema,
} from './schemas/categoryfavoris.schema';

@Module({
  providers: [CategoryFavorisService],
  controllers: [CategoryFavorisController],
  imports: [
    MongooseModule.forFeature([
      { name: CategoryFavoris.name, schema: CategoryFavorisSchema },
    ]),
  ],
})
export class CategoryFavorisModule {}

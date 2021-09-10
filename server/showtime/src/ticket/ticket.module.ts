import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './schemas/ticket.schema';

@Module({
  providers: [TicketService],
  controllers: [TicketController],
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
})
export class TicketModule {}

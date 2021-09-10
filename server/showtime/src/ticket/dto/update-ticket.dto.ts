import { BaseTicketDto } from './base-ticket.dto';

export class UpdateTicketDto extends BaseTicketDto {
  updated_at: Date;
}
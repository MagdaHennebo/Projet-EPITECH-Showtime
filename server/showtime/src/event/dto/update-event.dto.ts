// todo/dto/update-todo.dto.ts
import { BaseEventDto } from './base-event.dto';

export class UpdateEventDto extends BaseEventDto {
  updated_at: Date;
}

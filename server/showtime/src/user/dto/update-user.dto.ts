import { BaseUserDto } from './base-user.dto';

export class UpdateUserDto extends BaseUserDto {
  updated_at: Date;
}

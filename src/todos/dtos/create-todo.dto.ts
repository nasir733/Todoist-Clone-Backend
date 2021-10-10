import { ArgsType, Field } from '@nestjs/graphql';
import { IsInt, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateTodoDto {
  @Field((is) => String)
  @IsString()
  @Length(1, 255)
  title: string;
  @Field((is) => String)
  @IsString()
  description: string;
  @Field((is) => String)
  @IsString()
  dueDate: string;
  @Field((is) => String)
  @IsString()
  priority: number;
  @Field((is) => String)
  @IsInt()
  projectId: number;
}

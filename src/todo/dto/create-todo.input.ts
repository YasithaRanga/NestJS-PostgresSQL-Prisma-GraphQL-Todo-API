import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isCompleted: boolean;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  isCompleted: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

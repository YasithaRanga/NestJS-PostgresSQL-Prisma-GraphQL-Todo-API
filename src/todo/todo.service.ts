import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { GraphQLError } from 'graphql';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoInput: CreateTodoInput) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoInput.title,
        description: createTodoInput.description,
        isCompleted: false,
      },
    });
  }

  async findAll(filter: string) {
    switch (filter) {
      case 'completed':
        return await this.prisma.todo.findMany({
          where: { isCompleted: true },
        });
      case 'pending':
        return await this.prisma.todo.findMany({
          where: { isCompleted: false },
        });
      case 'all':
        return await this.prisma.todo.findMany();
      default:
        throw new GraphQLError('Invalid Filter');
    }
  }

  async findOne(id: number) {
    return await this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {
    return await this.prisma.todo.update({
      where: { id },
      data: {
        title: updateTodoInput.title,
        description: updateTodoInput.description,
        updatedAt: new Date(),
      },
    });
  }

  async completeTodo(id: number) {
    return await this.prisma.todo.update({
      where: { id },
      data: { isCompleted: true },
    });
  }

  async uncompleteTodo(id: number) {
    return await this.prisma.todo.update({
      where: { id },
      data: { isCompleted: false },
    });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({ where: { id } });
  }
}

import { Module } from '@nestjs/common';
import { TodosResolver } from './todos.resolvers';

@Module({
    providers: [TodosResolver],
})
export class TodosModule {}

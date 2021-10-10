import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateTodoDto } from "./dtos/create-todo.dto";
import { Todos } from "./entities/todo.entity";



@Resolver(of => Todos)
export class TodosResolver{
    @Query(returns => [Todos])
    todos(@Args('done') done: boolean): Todos[]{ 
        console.log(done)
        return [];
    }
    @Mutation(returns => Todos) 
    createTodo(@Args() CreateTodoDto: CreateTodoDto):boolean{
        console.log(CreateTodoDto)
        return;
    }
}
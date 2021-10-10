import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TodosModule } from './todos/todos.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2424',
      database: 'todo',
      entities: [],
      synchronize: true,
      logging:true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
       playground: true,
      // plugins: [ApolloServerPlugpinLandingPageLocalDefault()],
      
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

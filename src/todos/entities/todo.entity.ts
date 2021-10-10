import { Field, ObjectType } from "@nestjs/graphql";
import { isNullableType } from "graphql";

@ObjectType()
export class Todos{
    @Field(is => String)
    name: string;

    @Field(is => String, { nullable: true })
    task?: string;
}
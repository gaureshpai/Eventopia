/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BranchWhereUniqueInput } from "../../branch/base/BranchWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EventRegistrationCreateNestedManyWithoutUsersInput } from "./EventRegistrationCreateNestedManyWithoutUsersInput";
import { EnumUserGender } from "./EnumUserGender";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => BranchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BranchWhereUniqueInput)
  @IsOptional()
  @Field(() => BranchWhereUniqueInput, {
    nullable: true,
  })
  branch?: BranchWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => EventRegistrationCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => EventRegistrationCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => EventRegistrationCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  eventRegistrations?: EventRegistrationCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
    isArray: true,
  })
  @IsEnum(EnumUserGender, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumUserGender], {
    nullable: true,
  })
  gender?: Array<"Male" | "Female">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  profilePath?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  usn!: string;
}

export { UserCreateInput as UserCreateInput };

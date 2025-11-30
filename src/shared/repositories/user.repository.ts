import { Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Users } from "../schema/users";

export class UserRepository {
    constructor(
        @InjectModel(Users.name) private readonly userModel: Model<Users>,
    ) 
    {}
}
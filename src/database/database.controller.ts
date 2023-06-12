import { Controller } from "@nestjs/common";
import { DogsService } from "../dogs/dogs.service";
import { Dog } from "../entities/dog.entity";
import { InjectModel } from "@nestjs/sequelize";
import { DatabaseService } from "./database.service";

@Controller("database")
export class DatabaseController {
	constructor(private databaseService:DatabaseService) {
        databaseService.initModels()
    }

    
}

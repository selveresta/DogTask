import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Dog } from "../entities/dog.entity";
import { DogController } from "./dog.controller";

@Module({
	controllers: [DogsController, DogController],
	providers: [DogsService],
	imports: [SequelizeModule.forFeature([Dog])],
})
export class DogsModule {}

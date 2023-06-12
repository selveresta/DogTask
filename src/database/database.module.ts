import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Dog } from "../entities/dog.entity";
import { DatabaseController } from "./database.controller";
import { DogsService } from "../dogs/dogs.service";
import { DatabaseService } from './database.service';

@Module({
	providers: [DatabaseService],
	imports: [
		SequelizeModule.forRoot({
			dialect: "mssql",
			host: "localhost",
			port: 1433,
			username: "sa",
			password: "098890",
			database: "TestTask",
			models: [Dog],
			autoLoadModels: true,
		}),
		SequelizeModule.forFeature([Dog]),
	],
	controllers: [DatabaseController],
})
export class DatabaseModule {}

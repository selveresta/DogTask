import { Module } from "@nestjs/common";
// import { Dog } from "./entities/dog.entity";
import { DatabaseModule } from "./database/database.module";
import { DogsModule } from "./dogs/dogs.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [DatabaseModule, DogsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

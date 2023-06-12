import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class AppService {

	async ping(): Promise<string> {
		return await "Dogshouseservice.Version1.0.1";
	}
}

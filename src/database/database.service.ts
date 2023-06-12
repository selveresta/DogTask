import { Injectable } from "@nestjs/common";
import { Dog } from "../entities/dog.entity";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class DatabaseService {
	constructor(@InjectModel(Dog) private dogModel: typeof Dog) {}

	async initModels() {
		const existDog1 = this.dogModel.findOne({ where: { name: "Neo" } });
		const existDog2 = this.dogModel.findOne({ where: { name: "Jessy" } });
		if (existDog1) {
			return;
		}

		if (existDog2) {
			return;
		}

		await this.dogModel.create({ name: "Neo", color: "red & amber", tailLength: 22, weight: 32 });
		await this.dogModel.create({ name: "Jessy", color: "black & white", tailLength: 7, weight: 14 });
	}
}

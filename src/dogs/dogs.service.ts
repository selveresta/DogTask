import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Dog } from "../entities/dog.entity";
import { Attribute, PromisifyDogOffset, orderBy } from "./dogs.model";
import { CreateDogDto } from "./dto/createDog.dto";
import { off } from "process";

@Injectable()
export class DogsService {
	constructor(
		@InjectModel(Dog)
		private dogModel: typeof Dog
	) {}

	async findAll(
		orderBy?: orderBy,
		attribute?: Attribute,
		pageNumber?: number,
		limit?: number,
		pageSize?: number
	): Promise<PromisifyDogOffset> {
		pageNumber = Number(pageNumber) || 1;
		limit = Number(limit) || 10;
		let offset = pageNumber * limit - limit;

		if (!attribute) {
			return await this.dogModel.findAndCountAll({
				limit: limit,
				offset: offset,
				order: [["Name", orderBy ? orderBy.toUpperCase() : "DESC"]],
			});
		}

		return await this.dogModel.findAndCountAll({
			limit: limit,
			offset: offset,
			order: [[attribute, orderBy ? orderBy.toUpperCase() : "DESC"]],
		});
	}

	async createDog(dto: CreateDogDto) {
		try {
			if (dto.name && dto.color && dto.tailLength > 0 && dto.weight > 0 && Number(dto.tailLength) && Number(dto.weight)) {
				const existDog = await this.dogModel.findOne({ where: { name: dto.name } });

				if (existDog) {
					throw new HttpException(`${dto.name} is already exist`, HttpStatus.INTERNAL_SERVER_ERROR);
				}
				const dog = await this.dogModel.create(dto);

				return dog;
			} else {
				throw new HttpException("Incorect data", HttpStatus.BAD_REQUEST);
			}
		} catch (error) {
			return error;
		}
	}
}

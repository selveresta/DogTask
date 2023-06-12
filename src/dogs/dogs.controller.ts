import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { Attribute, orderBy } from "./dogs.model";
import { CreateDogDto } from "./dto/createDog.dto";

@Controller("dogs")
export class DogsController {
	constructor(private dogsService: DogsService) {}

	@Get()
	getAllDogs(
		@Query("order") order?: orderBy,
		@Query("attribute") attribute?: Attribute,
		@Query("pageNumber") pageNumber?: number,
		@Query("limit") limit?: number,
		@Query("pageSize") pageSize?: number
	) {
		return this.dogsService.findAll(order, attribute, pageNumber, limit, pageSize);
	}
}

import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { CreateDogDto } from "./dto/createDog.dto";

@Controller("dog")
export class DogController {
	constructor(private dogsService: DogsService) {}

    @Post()
    createDog(@Body() dogDto: CreateDogDto){
        return this.dogsService.createDog(dogDto)
    }   
}

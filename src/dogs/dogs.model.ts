import { Dog } from "../entities/dog.entity";

export type orderBy = "desc" | "asc";
export type Attribute = "color" | "tailLength" | "weight";
export interface PromisifyDogOffset {
	rows: Dog[];
	count: number;
}

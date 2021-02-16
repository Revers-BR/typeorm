import {Photo} from "../models/photo"
import {ConnectionOptions} from "typeorm"

console.log("env",process.env.DATABASE_URL)
export const dataBaseConfig:ConnectionOptions = {

	url: process.env.DATABASE_URL,
	type: "postgres",
	synchronize: true,
	entities:[
		Photo
	]
}

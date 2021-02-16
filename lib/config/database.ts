import {Photo} from "../models/photo"
import {ConnectionOptions} from "typeorm"

export const dataBaseConfig:ConnectionOptions = {

	url: process.env.DATABASE_URL,
	type: "postgres",
	synchronize: true,
	ssl: true,
	entities:[
		Photo
	]
}

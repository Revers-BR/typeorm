import {ConnectionOptions} from "typeorm"

const dataBaseConfig:ConnectionOptions = {

	url: process.env.DATABASE_URL,
	type: "postgres",
	synchronize: true,
	logging: [
		"query","error","migration"
	],
	migrations: [
		"lib/database/migrations/*.ts"
	],
	cli:{
		migrationsDir: "lib/database/migrations"
	},
	ssl: {
		rejectUnauthorized: false
	},
	entities:[
		__dirname + "/../models/**/*.js"
	]
}

export = dataBaseConfig

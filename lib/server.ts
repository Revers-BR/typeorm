require("dotenv").config()

import app from "./app"
import {createConnection} from "typeorm"
import {dataBaseConfig} from "./config/database"


let PORT = process.env.PORT || 3000

createConnection(dataBaseConfig).then(()=> {

	app.listen(PORT,()=> {
		console.info(`escutando na porta: ${PORT}`)
	})

}).catch(e => {
	console.error(`Error: ${e}`)
})


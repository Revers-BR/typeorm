import {Routes} from "./config/routes"
import * as express from "express"
import * as bodyParser from "body-parser"

class App {

	public app:express.Application

	private router:Routes

	constructor(){
		this.app = express()
		this.config()
		this.router = new Routes()
		this.router.routes(this.app)
	}

	private config(){
		this.app.use(bodyParser.json())
		this.app.use(bodyParser.urlencoded({
			extended: true
		}))
	}
}

export default new App().app

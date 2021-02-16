import {PhotoController} from "../controllers/photo.controller"
import { Application} from "express"

export class Routes {

	private photoController:PhotoController = new PhotoController()

	public routes(app:Application):void{
		try {
			app.route("/").
				get(this.photoController.index).
				post(this.photoController.create)
		} catch (e) {
			/* handle error */
			console.log(e)
		}
	}
}

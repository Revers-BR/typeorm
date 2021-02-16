import { Request, Response } from "express"
import {Photo} from "../models/photo"
import {getManager} from "typeorm"

export class PhotoController {
	public async create( req:Request, res:Response ){
		const repository = getManager().getRepository(Photo)

		const photo = repository.create(req.body)

		await repository.save(photo)

		res.json({
			photo
		})
	}

	public async index( req:Request, res:Response ){
		const repository = getManager().getRepository(Photo)

		const photo = await repository.find()

		res.json({
			photo
		})
	}
}

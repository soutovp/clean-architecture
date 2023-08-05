import express, { Express, Request, Response } from 'express'
import { CreateRouteUseCase } from '../../../Application/create-route.use-case'
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository'
const app: Express = express()

const routeRepo = new RouteInMemoryRepository()

app.post('/routes', async (req: Request, res: Response) => {

	const createUseCase = new CreateRouteUseCase(routeRepo)
	const output = await createUseCase.execute(req.body)
	res.status(201).json(output)
})
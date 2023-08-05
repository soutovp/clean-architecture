import express, { Express, Request, Response } from 'express'
import { CreateRouteUseCase } from '../../../Application/create-route.use-case'
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository'
const app: Express = express()
const port = process.env.PORT || 3000
const routeRepo = new RouteInMemoryRepository()

app.use(express.json())

app.post('/routes', async (req: Request, res: Response) => {

	const createUseCase = new CreateRouteUseCase(routeRepo)
	const output = await createUseCase.execute(req.body)
	res.status(201).json(output)
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
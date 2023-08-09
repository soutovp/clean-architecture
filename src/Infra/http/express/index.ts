import express, { Express, Request, Response } from 'express'
import { CreateRouteUseCase } from '../../../Application/create-route.use-case'
import { RouteInMemoryRepository } from '../../db/route-in-memory.repository'
import { ListAllRoutesUseCase } from '../../../Application/list-all-routes.use-case'
const app: Express = express()
const port = process.env.PORT || 3000
const routeRepo = new RouteInMemoryRepository()

app.use(express.json())

app.get('/routes', async (_req: Request, res: Response) => {
	const listAllUseCase = new ListAllRoutesUseCase(routeRepo);
	const output = await listAllUseCase.execute();
	res.json(output)
})

app.post('/routes', async (req: Request, res: Response) => {

	const createUseCase = new CreateRouteUseCase(routeRepo)
	const output = await createUseCase.execute(req.body)
	res.status(201).json(output)
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
import { RouteInMemoryRepository } from "../Infra/db/route-in-memory.repository"
import { CreateRouteUseCase } from "./create-route.use-case"

describe('CreateRouteUseCase Tests', () => {
	it('Should create a new route', async () => {
		const repository = new RouteInMemoryRepository()
		const createUseCase = new CreateRouteUseCase(repository)
		const output = await createUseCase.execute({
			title: 'my title',
			startPosition: { lat: 1, long: 2 },
			endPosition: { lat: 3, long: 4 },
		});
		expect(repository.items).toHaveLength(1);
		expect(output).toStrictEqual({
			id: repository.items[0].id,
			title: 'my title',
			startPosition: { lat: 1, long: 2 },
			endPosition: { lat: 3, long: 4 },
			points: []
		})
	})
})
import { Route, RouteProps } from "../../Domain/route.entity"
import { RouteInMemoryRepository } from "./route-in-memory.repository"

describe('RouteInMemoryRepository Test', () => {
	it('Should insert a new route', async () => {
		const repository = new RouteInMemoryRepository()
		const routeProps: RouteProps = {
			title: 'minha rota',
			startPosition: { lat: 0, long: 1 },
			endPosition: { lat: 2, long: 3 }
		}
		const route = new Route(routeProps);
		await repository.isert(route);
		expect(repository.items).toHaveLength(1)
		expect(repository.items).toStrictEqual([route])
	})
})
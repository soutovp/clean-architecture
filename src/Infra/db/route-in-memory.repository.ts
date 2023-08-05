import { Route } from "../../Domain/route.entity";
import { RouteRepositoryInterface } from "../../Domain/route.repository";

export class RouteInMemoryRepository implements RouteRepositoryInterface {
	items: Route[] = []
	async isert(route: Route): Promise<void> {
		this.items.push(route)
	}
}
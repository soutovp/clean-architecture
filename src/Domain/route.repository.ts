import { Route } from "./route.entity";

export interface RouteRepositoryInterface {
	isert(route: Route): Promise<void>
	findAll(): Promise<Route[]>
}

//DIP
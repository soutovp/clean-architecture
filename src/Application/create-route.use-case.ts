import { LatLng, Route } from "../Domain/route.entity";
import { RouteRepositoryInterface } from "../Domain/route.repository";

export class CreateRouteUseCase {
	constructor(private routeRepo: RouteRepositoryInterface) {

	}
	async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
		//Realiza operações em cima das entidades
		const route = new Route(input);
		await this.routeRepo.isert(route)
		return route.toJSON()
	}
}
type CreateRouteInput = {
	title: string;
	startPosition: LatLng;
	endPosition: LatLng;
	paths?: LatLng[];
}
type CreateRouteOutput = {
	id: string;
	title: string;
	startPosition: LatLng;
	endPosition: LatLng;
	paths?: LatLng[];
};
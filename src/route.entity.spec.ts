import { LatLng, Route, RouteProps } from "./route.entity"

describe('Route Tests', () => {
	test('constructor', () => {
		let routeProps: RouteProps = {
			title: 'minha rota',
			startPosition: { lat: 0, long: 1 },
			endPosition: { lat: 2, long: 3 }
		}
		let route = new Route(routeProps);
		expect(route.props).toStrictEqual({
			...routeProps, points: []
		})

		routeProps = {
			title: 'minha rota',
			startPosition: { lat: 0, long: 1 },
			endPosition: { lat: 2, long: 3 },
			points: [
				{ lat: 10, long: 11 }
			]
		}
		route = new Route(routeProps)
		expect(route.props).toStrictEqual({
			...routeProps, points: [
				{ lat: 10, long: 11 }
			]
		})
	})
	test('updateTitle method', () => {
		let routeProps: RouteProps = {
			title: 'minha rota',
			startPosition: { lat: 0, long: 1 },
			endPosition: { lat: 2, long: 3 }
		}
		let route = new Route(routeProps);
		route.updateTitle('title updated')
		expect(route.title).toBe('title updated')
	})
	test('updatePosition method', () => {
		const routeProps: RouteProps = {
			title: 'minha rota',
			startPosition: { lat: 0, long: 1 },
			endPosition: { lat: 2, long: 3 }
		}
		const route = new Route(routeProps);

		const startPosition: LatLng = { lat: 10, long: 20 }
		const endPosition: LatLng = { lat: 30, long: 40 }
		route.updatePosition(startPosition, endPosition)

		expect(route.startPosition).toBe(startPosition)
		expect(route.endPosition).toBe(endPosition)
	})
})
import getWeather from './index';

const API = 'https://api.colomfernando.dev/demos/weather';

beforeAll(() => {
	window.fetch = jest.fn();
});
describe('getWeather function', () => {
	test('response', () => {
		const params = { lat: '61.5240097', lon: '105.3187561', units: 'us' };
		return getWeather(params).then(res => {
			expect(res).toEqual();
		});
	});
});

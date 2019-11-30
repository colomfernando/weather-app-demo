import axios from 'axios';
import { validateParamsApi, validateObj } from '../utils';

const API = 'https://api.colomfernando.dev/demos/weather';

const getWeather = async (params = {}) => {
	try {
		if (!validateParamsApi(params)) return {};
		const { lat, lon, units = 'si' } = params;
		const response = await axios.get(`${API}?lat=${lat}&lon=${lon}&units=${units}`);
		if (!validateObj(response)) return {};
		const { data } = response;
		if (!validateObj(data)) return {};
		return data;
	} catch (error) {
		return {};
	}
};

const getPosition = () =>
	new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));

export const getLocationFromBrowser = async () => {
	try {
		const { navigator } = window;
		if ('geolocation' in navigator) {
			const position = await getPosition();
			if (!position) return {};
			const { coords } = position;
			if (!coords) return {};
			const { latitude, longitude } = coords;
			return { lat: latitude, lon: longitude };
		}
		return {};
	} catch (reason) {
		return {};
	}
};

export { getWeather as default };

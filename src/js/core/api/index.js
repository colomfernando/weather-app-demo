import axios from 'axios';
import { validateParamsApi, validateObj, validateArray } from '../utils';

const APIWEATHER = 'https://api.colomfernando.dev/demos/weather';
const APILOCATION =
	'https://www.mapquestapi.com/search/v3/prediction?key=RJvnH1bDTpYyInTGHSIy56VNAGnX2M6l&limit=15&collection=adminArea,address,category&q=';

export const getWeather = async (params = {}) => {
	try {
		if (!validateParamsApi(params)) return {};
		const { lat, lon, units = 'si' } = params;
		const response = await axios.get(`${APIWEATHER}?lat=${lat}&lon=${lon}&units=${units}`);
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
			return { lat: latitude, lon: longitude, error: null };
		}
		return {};
	} catch (reason) {
		return {
			error: reason.message
		};
	}
};

export const searchLocation = async (value = '') => {
	try {
		if (!value || typeof value !== 'string') return {};
		const { data } = await axios.get(`${APILOCATION}${value}`);
		if (!validateObj(data)) return [];
		const { results } = data;
		if (!validateArray(results)) return [];
		console.log('result :', results);
		return results;
	} catch (reason) {
		console.log('reason :', reason);
		return [];
	}
};

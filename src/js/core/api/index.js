import axios from 'axios';
import { validateParamsApi, validateObj, validateArray, debounce } from '../utils';

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

const getCoordsAndProps = obj => {
	if (!validateObj(obj)) return [];
	const { geometry = {}, properties = {} } = obj;
	if (!validateObj(geometry)) return [];
	const { coordinates = [] } = geometry;
	if (!validateArray(coordinates)) return [];
	return { coordinates, properties };
};

const parseResults = obj => {
	if (!validateArray(obj)) return {};
	const parsedData = obj.reduce((acc, act) => {
		const item = act;
		const { place, displayString, name, slug, id } = item;
		const data = { id, name, slug, ...getCoordsAndProps(place), displayString };
		return [...acc, data];
	}, []);
	return parsedData;
};

export const searchLocation = async (value = '') => {
	try {
		if (!value || typeof value !== 'string') return {};
		const { data } = await axios.get(`${APILOCATION}${value}`);
		if (!validateObj(data)) return [];
		const { results } = data;
		if (!validateArray(results)) return [];
		const parsedResults = parseResults(results);
		return parsedResults;
	} catch (reason) {
		return [];
	}
};

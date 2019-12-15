import axios from 'axios';
import { validateParamsApi, validateObj, validateArray } from '../utils';

const APIWEATHER = 'https://api.colomfernando.dev/demos/weather';
const APILOCATION = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const PARAMS =
	'?access_token=pk.eyJ1IjoiY29sb21mZXJuYW5kbyIsImEiOiJjazQ3NGNjMGEwcjZtM2Rta24xZDd2N3NyIn0.QmgyS1sxOdUSx1LGuDZ98w&limit=10&types=country,region,district,place';

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
		const { place_name: displayString, text, id } = item;
		const data = { id, name: text, ...getCoordsAndProps(item), displayString };
		return [...acc, data];
	}, []);
	return parsedData;
};

export const searchLocation = async (value = '') => {
	try {
		if (!value || typeof value !== 'string') return {};
		const { data } = await axios.get(`${APILOCATION}${value}.json${PARAMS}`);
		if (!validateObj(data)) return [];
		const { features: results } = data;
		if (!validateArray(results)) return [];
		const parsedResults = parseResults(results);
		return parsedResults;
	} catch (reason) {
		return [];
	}
};

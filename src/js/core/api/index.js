import axios from 'axios';
import { validateParamsApi, validateObj } from '../utils';

const API = 'https://api.colomfernando.dev/demos/weather';

export const getWeather = async (params = {}) => {
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

export const test = () => {};

import { getWeather, getLocationFromBrowser } from 'core/api';
import { validateObj } from 'core/utils';
import actions from './actions';

const setErrorIfExist = (data, dispatch) => {
	if (!validateObj(data)) {
		dispatch(actions.setError({ apiWeather: true }));
		throw new Error('error in api weather');
	}
	Object.keys(data).map(
		key => !validateObj(data[key]) && dispatch(actions.setError({ [key]: true }))
	);
};

const getWeatherFromLocation = () => async dispatch => {
	try {
		dispatch(actions.setLoading(true));
		const { lat, lon, error } = await getLocationFromBrowser();
		if (error) dispatch(actions.setError({ geolocation: true }));
		if (!lat || !lon) return;
		const params = {
			lat: lat.toString(),
			lon: lon.toString()
		};
		const data = await getWeather({ ...params });
		if (!validateObj(data)) {
			dispatch(actions.setError({ apiWeather: true }));
			return;
		}
		const { currently, daily, hourly, timezone } = data;
		setErrorIfExist({ currently, daily, hourly }, dispatch);
		if (!timezone) dispatch(actions.setError({ timezone: true }));
		dispatch(actions.setCurrently(currently));
		dispatch(actions.setDaily(daily));
		dispatch(actions.setHourly(hourly));
		dispatch(actions.setTimeZone(timezone));
		dispatch(actions.setLoading(false));
	} catch (reason) {
		dispatch(actions.setError({ apiWeather: true }));
		dispatch(actions.setLoading(false));
		console.log('reason :', reason);
	}
};

export default { getWeatherFromLocation };

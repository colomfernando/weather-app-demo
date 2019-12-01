import types from './types';

const setCurrently = res => ({
	type: types.SET_CURRENTLY,
	payload: res
});

const setDaily = res => ({
	type: types.SET_DAILY,
	payload: res
});

const setHourly = res => ({
	type: types.SET_HOURLY,
	payload: res
});

const setTimeZone = res => ({
	type: types.SET_TIMEZONE,
	payload: res
});

const setLoading = res => ({
	type: types.SET_LOADING,
	payload: res
});

const setError = res => ({
	type: types.SET_ERROR,
	payload: res
});

export default {
	setCurrently,
	setDaily,
	setHourly,
	setTimeZone,
	setLoading,
	setError
};

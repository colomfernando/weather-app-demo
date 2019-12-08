import types from './types';

const initialState = {
	timezone: null,
	currently: {},
	daily: {},
	hourly: {},
	loading: false,
	geoLocationActive: false,
	locationResults: [],
	error: {
		apiWeather: false,
		timezone: false,
		currently: false,
		daily: false,
		hourly: false,
		geolocation: false
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_LOADING:
			return { ...state, loading: action.payload };
		case types.SET_ERROR:
			return { ...state, error: { ...state.error, ...action.payload } };
		case types.SET_TIMEZONE:
			return { ...state, timezone: action.payload };
		case types.SET_CURRENTLY:
			return { ...state, currently: action.payload };
		case types.SET_DAILY:
			return { ...state, daily: action.payload };
		case types.SET_HOURLY:
			return { ...state, hourly: action.payload };
		case types.SET_GEOLOCATION_ACTIVE:
			return { ...state, geoLocationActive: action.payload };
		case types.SET_LOCATION_RESULTS:
			return { ...state, locationResults: action.payload };
		default:
			return state;
	}
};

export default reducer;

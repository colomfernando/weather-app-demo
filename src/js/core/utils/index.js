export const validateObj = (obj = {}) =>
	!!(obj && Object.prototype.toString.call(obj) === '[object Object]' && Object.keys(obj).length);

export const validateParamsApi = (obj = {}) => {
	if (!validateObj(obj)) return false;
	const keysRequired = ['lat', 'lon'];
	if (!keysRequired.every(key => key in obj)) return false;
	return Object.keys(obj).every(key => typeof obj[key] === 'string');
};

export const validateArray = (arr = []) =>
	!!(arr && Object.prototype.toString.call(arr) === '[object Array]' && arr.length);

export const validateNumber = num =>
	!!(num && typeof num === 'number' && !Number.isNaN(Number(num)));

export const createObjByKeys = (filterKeys = [], obj = {}) => {
	if (!validateArray(filterKeys) || !validateObj(obj)) return {};
	return Object.keys(obj).reduce((acc, act) => {
		if (!filterKeys.includes(act)) return acc;
		return { ...acc, [act]: obj[act] };
	}, {});
};

export function debounce(func, wait) {
	let timeout;
	return function(...args) {
		const context = this;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			func.apply(context, args);
		}, wait);
	};
}

export const createDate = unixTime => {
	if (!validateNumber(unixTime)) return null;
	const date = new Date(unixTime * 1000);
	const days = {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	};
	const months = {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December'
	};
	return {
		date,
		year: date.getFullYear(),
		day: days[date.getDay()],
		dayNumber: date.getDate(),
		month: months[date.getMonth()],
		hour: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds()
	};
};

export const storageLocations = () => {
	const nameStorage = 'locations';
	const limitStorage = 5;
	const { localStorage } = window;
	if (!localStorage) return null;
	const getStorage = () => JSON.parse(localStorage.getItem(nameStorage));

	const parseData = data => {
		if (!validateObj(data)) return null;
		const savedData = getStorage();
		if (!savedData || !validateArray(savedData)) return [data];
		if (savedData.length >= limitStorage) return [data, ...savedData.slice(0, limitStorage)];
		return [data, ...savedData];
	};

	const setStorage = data => {
		if (!data || !validateObj(data)) return null;
		const { name, lat, lon } = data;
		if (!name || !lat || !lon) return null;
		const savedStorage = getStorage();
		const isDataSaved = savedStorage ? savedStorage.filter(location => location.name === name) : [];
		if (isDataSaved.length) return null;
		const params = {
			name: name.toString(),
			lat: lat.toString(),
			lon: lon.toString()
		};
		return localStorage.setItem(nameStorage, JSON.stringify(parseData(params)));
	};

	return { setStorage, getStorage };
};

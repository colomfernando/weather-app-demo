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

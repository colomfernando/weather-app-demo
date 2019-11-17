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

import {
	validateObj,
	validateArray,
	validateParamsApi,
	validateNumber,
	createObjByKeys
} from './index';

describe('validateObj function', () => {
	test('empty object arg', () => {
		expect(validateObj({})).toBe(false);
	});
	test('string arg', () => {
		expect(validateObj('test')).toBe(false);
	});
	test('empty array arg', () => {
		expect(validateObj([])).toBe(false);
	});
	test('array arg', () => {
		expect(validateObj([1])).toBe(false);
	});
	test('number arg', () => {
		expect(validateObj(1)).toBe(false);
	});
	test('object arg', () => {
		expect(validateObj({ a: 'test' })).toBe(true);
	});
});

describe('validateArray function', () => {
	test('empty object arg', () => {
		expect(validateArray({})).toBe(false);
	});
	test('string arg', () => {
		expect(validateArray('test')).toBe(false);
	});
	test('empty array arg', () => {
		expect(validateArray([])).toBe(false);
	});
	test('array arg', () => {
		expect(validateArray([1])).toBe(true);
	});
	test('number arg', () => {
		expect(validateArray(1)).toBe(false);
	});
	test('object arg', () => {
		expect(validateArray({ a: 'test' })).toBe(false);
	});
});

describe('validateParamsApi function', () => {
	test('empty object param', () => {
		expect(validateParamsApi({})).toBe(false);
	});
	test('param missing', () => {
		expect(validateParamsApi({ lat: '23423' })).toBe(false);
	});
	test('param missing', () => {
		expect(validateParamsApi({ lat: '23423', us: 'test' })).toBe(false);
	});
	test('param object with wrong typeof values', () => {
		expect(validateParamsApi({ lat: '23423', long: {} })).toBe(false);
	});
	test('param object with wrong typeof values', () => {
		expect(validateParamsApi({ lat: '23423', lon: 3 })).toBe(false);
	});
	test('param ok', () => {
		expect(validateParamsApi({ lat: '23423', lon: '2332' })).toBe(true);
	});
	test('param ok', () => {
		expect(validateParamsApi({ lat: '23423', lon: '2332', units: 'us' })).toBe(true);
	});
});

describe('validateNumber function', () => {
	test('string param', () => {
		expect(validateNumber('test')).toBe(false);
	});
	test('empty param', () => {
		expect(validateNumber()).toBe(false);
	});
	test('object param', () => {
		expect(validateNumber({})).toBe(false);
	});
	test('object param', () => {
		expect(validateNumber({ a: 'test' })).toBe(false);
	});
	test('array param', () => {
		expect(validateNumber([])).toBe(false);
	});
	test('array param', () => {
		expect(validateNumber(['test'])).toBe(false);
	});
	test('NaN param', () => {
		expect(validateNumber(NaN)).toBe(false);
	});
	test('number param', () => {
		expect(validateNumber(2.4)).toBe(true);
	});
	test('number param', () => {
		expect(validateNumber(4)).toBe(true);
	});
});

describe('createObjByKeys function', () => {
	test('params empty', () => {
		expect(createObjByKeys()).toEqual({});
	});
	test('array param empty', () => {
		const arr = [];
		const obj = { a: '1', b: '2', c: '3' };
		expect(createObjByKeys(arr, obj)).toEqual({});
	});
	test('obj param empty', () => {
		const arr = ['a', 'b'];
		const obj = {};
		expect(createObjByKeys(arr, obj)).toEqual({});
	});
	test('obj param empty', () => {
		const arr = ['a', 'b'];
		const obj = { a: '1', b: '2', c: '3' };
		expect(createObjByKeys(arr, obj)).toEqual({ a: '1', b: '2' });
	});
});

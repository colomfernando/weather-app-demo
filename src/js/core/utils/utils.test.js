import { validateObj, validateArray, validateParamsApi } from './index';

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

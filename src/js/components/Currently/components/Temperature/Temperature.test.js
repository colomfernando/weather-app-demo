import React from 'react';
import { mount } from 'enzyme';
import Temperature from './Temperature';

describe('component', () => {
	it('match snapshot ', () => {
		const wrapper = mount(<Temperature temperature={20} feelLike={21} />);
		expect(wrapper).toMatchSnapshot();
	});

	// it('render ok ', () => {
	// 	const wrapper = mount(<Temperature temperature={20} feelLike={21} />);
	// 	expect(wrapper.props().temperature).toEqual(20);
	// 	expect(wrapper.props().feelLike).toEqual(21);
	// });

	// it('expect two paragraph', () => {
	// 	const wrapper = mount(<Temperature temperature={20} feelLike={21} />);
	// 	const text = wrapper.find('p');
	// 	expect(text.length).toBe(2);
	// });
	// it('value of texts', () => {
	// 	const wrapper = mount(<Temperature temperature={24} feelLike={32} />);
	// 	const temperatureText = wrapper
	// 		.find('div')
	// 		.childAt(0)
	// 		.text();
	// 	const feelLikeText = wrapper
	// 		.find('div')
	// 		.childAt(1)
	// 		.text();
	// 	expect(temperatureText).toEqual('24º');
	// 	expect(feelLikeText).toEqual('Feel like: 32º');
	// });
});

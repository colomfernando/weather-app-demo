import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapped = shallow(<App />);
describe('Title', () => {
	it('should render the Title Component correctly', () => {
		expect(wrapped).toMatchSnapshot();
	});
	it('renders the Titles children', () => {
		expect(wrapped.find('div').text()).toEqual('App');
	});
});

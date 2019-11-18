import React from 'react';
import { string, number } from 'prop-types';
import { validateNumber } from 'core/utils';
import Styles from './styles';

const translateTitle = {
	apparentTemperature: 'Feel like'
};

const parsedValue = {
	apparentTemperature: value => `${value.toFixed()} º`,
	humidity: value => `${value * 100} %`
};

const Row = ({ title, value }) => {
	if (!title || typeof title !== 'string' || !validateNumber(value)) return null;
	return (
		<Styles.Wrapper>
			<Styles.Text>{!translateTitle[title] ? title : translateTitle[title]}</Styles.Text>
			<Styles.Text>{!parsedValue[title] ? value : parsedValue[title](value)}</Styles.Text>
		</Styles.Wrapper>
	);
};

Row.propTypes = {
	title: string,
	value: number
};

Row.defaultProps = {
	title: '',
	value: null
};

export default Row;

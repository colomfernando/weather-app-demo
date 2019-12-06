import React from 'react';
import { string, arrayOf, number, func } from 'prop-types';
import { validateArray } from 'core/utils';
import Styles from './styles';

const Result = ({ displayString, coordinates, setWeather }) => {
	if (!validateArray(coordinates)) return null;
	const params = {
		lat: coordinates[1],
		lon: coordinates[0]
	};
	return <Styles.Button onClick={() => setWeather(params)}>{displayString}</Styles.Button>;
};

Result.propTypes = {
	displayString: string,
	coordinates: arrayOf(number).isRequired,
	setWeather: func
};

Result.defaultProps = {
	displayString: '',
	setWeather: () => {}
};

export default Result;

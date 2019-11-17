import React from 'react';
import { objectOf, any, string } from 'prop-types';
import { validateArray } from 'core/utils';
import Styles from './styles';
import Temperature from './components/Temperature';

const Currently = ({ location, currently }) => {
	const regex = new RegExp(/_|-/, 'g');
	const parseTimeZone = validateArray(location.split('/')) ? location.split('/').pop() : '';
	const sanitizeLocation = parseTimeZone.replace(regex, ' ');
	const { apparentTemperature, temperature, icon } = currently;
	return (
		<Styles.Wrapper>
			<Styles.Location>{sanitizeLocation}</Styles.Location>
			<Styles.Icon name={icon} size={90} />
			<Temperature temperature={temperature} feelLike={apparentTemperature} />
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	location: string.isRequired,
	currently: objectOf(any).isRequired
};
export default Currently;

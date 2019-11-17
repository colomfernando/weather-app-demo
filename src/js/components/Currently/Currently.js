import React from 'react';
import { objectOf, any } from 'prop-types';
import Styles from './styles';
import Temperature from './components/Temperature';

const Currently = ({ currently }) => {
	const { apparentTemperature, temperature, icon } = currently;
	console.log('currently :', currently);
	return (
		<Styles.Wrapper>
			{icon && <Styles.Icon name={icon} size={80} />}
			{temperature && apparentTemperature && (
				<Temperature temperature={temperature} feelLike={apparentTemperature} />
			)}
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	currently: objectOf(any).isRequired
};
export default Currently;

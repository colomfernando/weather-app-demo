import React from 'react';
import { objectOf, any } from 'prop-types';
import Styles from './styles';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';

const Currently = ({ currently }) => {
	const { apparentTemperature, temperature, icon, humidity } = currently;
	console.log('currently :', currently);
	return (
		<Styles.Wrapper>
			{icon && (
				<Styles.WrapperIcon>
					<Styles.Icon name={icon} size={60} />
				</Styles.WrapperIcon>
			)}
			{temperature && apparentTemperature && (
				<Styles.WrapperInfo>
					<Temperature temperature={temperature} feelLike={apparentTemperature} />
					{humidity && <Humidity data={humidity} />}
				</Styles.WrapperInfo>
			)}
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	currently: objectOf(any).isRequired
};
export default Currently;

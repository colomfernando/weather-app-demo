import React from 'react';
import { number } from 'prop-types';
import { validateNumber } from 'core/utils';
import Styles from './styles';

const Temperature = ({ temperature, feelLike }) => {
	if (!validateNumber(temperature) || !validateNumber(feelLike)) return null;
	return (
		<Styles.Wrapper>
			<Styles.TemperatureText>{`${Number.parseInt(temperature, 10)}º`}</Styles.TemperatureText>
			<Styles.FeelLikeText>{`Feel like: ${Number.parseInt(feelLike, 10)}º`}</Styles.FeelLikeText>
		</Styles.Wrapper>
	);
};

Temperature.propTypes = {
	temperature: number.isRequired,
	feelLike: number.isRequired
};

export default Temperature;

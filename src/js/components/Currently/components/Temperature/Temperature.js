import React from 'react';
import { number } from 'prop-types';
import { validateNumber } from 'core/utils';
import Styles from './styles';

const Temperature = ({ temperature, feelLike }) => {
	if (!validateNumber(temperature) || !validateNumber(feelLike)) return null;
	return (
		<Styles.Wrapper>
			<Styles.TemperatureText>{`${Number.parseInt(temperature, 10)}º`}</Styles.TemperatureText>
			<Styles.WrapperFeel>
				<Styles.FeelLikeText>Feel like</Styles.FeelLikeText>
				<Styles.FeelLikeText>{`${Number.parseInt(feelLike, 10)}º`}</Styles.FeelLikeText>
			</Styles.WrapperFeel>
		</Styles.Wrapper>
	);
};

Temperature.propTypes = {
	temperature: number.isRequired,
	feelLike: number.isRequired
};

export default Temperature;

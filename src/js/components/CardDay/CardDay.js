import React from 'react';
import { string } from 'prop-types';
import Icon from 'components/Icon';
import Styles from './styles';

const CardDay = ({ day, icon, tempeture }) => {
	return (
		<Styles.Wrapper>
			<Styles.Day>{day}</Styles.Day>
			<Icon day="monday" name={icon} tempeture="30" size={30} />
			<p>{tempeture}</p>
		</Styles.Wrapper>
	);
};

CardDay.propTypes = {
	day: string.isRequired,
	icon: string.isRequired,
	tempeture: string.isRequired
};
export default CardDay;

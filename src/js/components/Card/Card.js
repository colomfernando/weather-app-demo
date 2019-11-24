import React from 'react';
import { string } from 'prop-types';
import Styles from './styles';

const Card = ({ icon, title, temperature, ...rest }) => {
	if (!icon || !title || !temperature) return null;
	return (
		<Styles.Wrapper {...rest}>
			<Styles.Title>{title}</Styles.Title>
			<Styles.Temperature>{temperature}</Styles.Temperature>
			<Styles.Icon name={icon} size={40} />
		</Styles.Wrapper>
	);
};

Card.propTypes = {
	icon: string.isRequired,
	title: string.isRequired,
	temperature: string.isRequired
};

export default Card;

import React from 'react';
import { string, func } from 'prop-types';
import Styles from './styles';

const Location = ({ name, lat, lon, setWeather }) => {
	if (!name || !lat || !lon) return null;
	return (
		<Styles.Wrapper onClick={() => setWeather({ lat, lon })}>
			<Styles.Name>{name}</Styles.Name>
		</Styles.Wrapper>
	);
};

Location.propTypes = {
	name: string.isRequired,
	lat: string.isRequired,
	lon: string.isRequired,
	setWeather: func
};

Location.defaultProps = {
	setWeather: () => {}
};

export default Location;

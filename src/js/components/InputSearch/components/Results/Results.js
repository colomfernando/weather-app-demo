import React from 'react';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import GetLocation from '../GetLocation';
import Styles from './styles';

const Results = ({ getWeatherFromLocation }) => {
	const geoLocationActive = useSelector(state => state.geoLocationActive);
	return (
		<Styles.Wrapper onClick={getWeatherFromLocation}>
			<GetLocation
				iconName="target"
				iconSize={15}
				text="use current location"
				isActive={geoLocationActive}
			/>
		</Styles.Wrapper>
	);
};

Results.propTypes = {
	getWeatherFromLocation: func
};

Results.defaultProps = {
	getWeatherFromLocation: () => {}
};

export default Results;

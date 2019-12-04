import React from 'react';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import GetLocation from '../GetLocation';
import Styles from './styles';
import Result from './components/Result';

const Results = ({ getWeatherFromLocation }) => {
	const geoLocationActive = useSelector(state => state.geoLocationActive);
	const locationResults = useSelector(state => state.locationResults);
	console.log('locationResults :', locationResults);
	return (
		<Styles.Wrapper onClick={getWeatherFromLocation}>
			<GetLocation
				iconName="target"
				iconSize={15}
				text="use current location"
				isActive={geoLocationActive}
			/>
			{!!locationResults.length &&
				locationResults.slice(0, 5).map(result => <Result key={result.id} {...result} />)}
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

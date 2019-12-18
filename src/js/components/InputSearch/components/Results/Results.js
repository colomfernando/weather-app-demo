import React from 'react';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import SavedLocations from './components/SavedLocations';
import GetLocation from '../GetLocation';
import Styles from './styles';
import Result from './components/Result';

const Results = ({ getWeatherFromLocation, handleClickResult }) => {
	const geoLocationActive = useSelector(state => state.geoLocationActive);
	const locationResults = useSelector(state => state.locationResults);
	return (
		<Styles.Wrapper>
			<GetLocation
				iconName="target"
				iconSize={15}
				text="use current location"
				isActive={geoLocationActive}
				onClick={getWeatherFromLocation}
			/>
			<SavedLocations setWeather={handleClickResult} />
			{!!locationResults.length && (
				<Styles.WrapperResults>
					{locationResults.slice(0, 8).map(result => (
						<Result key={result.id} {...result} setWeather={handleClickResult} />
					))}
				</Styles.WrapperResults>
			)}
			<Styles.Attribution>© 2020 Mapbox and its suppliers. All rights reserved.</Styles.Attribution>
		</Styles.Wrapper>
	);
};

Results.propTypes = {
	getWeatherFromLocation: func,
	handleClickResult: func
};

Results.defaultProps = {
	getWeatherFromLocation: () => {},
	handleClickResult: () => {}
};

export default Results;

import React from 'react';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
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
			{!!locationResults.length && (
				<Styles.WrapperResults>
					{locationResults.slice(0, 8).map(result => (
						<Result key={result.id} {...result} setWeather={handleClickResult} />
					))}
				</Styles.WrapperResults>
			)}
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

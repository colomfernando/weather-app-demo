import React from 'react';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import GetLocation from '../GetLocation';
import Styles from './styles';
import Result from './components/Result';

const Results = ({ getWeatherFromLocation, setWeather }) => {
	const geoLocationActive = useSelector(state => state.geoLocationActive);
	const locationResults = useSelector(state => state.locationResults);
	return (
		<Styles.Wrapper onClick={getWeatherFromLocation}>
			<GetLocation
				iconName="target"
				iconSize={15}
				text="use current location"
				isActive={geoLocationActive}
			/>
			{!!locationResults.length && (
				<Styles.WrapperResults>
					{locationResults.slice(0, 5).map(result => (
						<Result key={result.id} {...result} setWeather={setWeather} />
					))}
				</Styles.WrapperResults>
			)}
		</Styles.Wrapper>
	);
};

Results.propTypes = {
	getWeatherFromLocation: func,
	setWeather: func
};

Results.defaultProps = {
	getWeatherFromLocation: () => {},
	setWeather: () => {}
};

export default Results;

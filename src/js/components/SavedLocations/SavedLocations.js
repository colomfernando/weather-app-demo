import React from 'react';
import { validateArray, validateObj } from 'core/utils';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import Styles from './styles';
import Location from './components/Location';

const SavedLocations = ({ setWeather }) => {
	const savedStorage = useSelector(state => state.storageLocations);
	if (!validateArray(savedStorage)) return null;
	const arrayWithValidData = savedStorage.filter(item => validateObj(item));
	return (
		<Styles.Wrapper>
			{arrayWithValidData.length && <Styles.Title>Last searches</Styles.Title>}
			<Styles.WrapperSearch>
				{arrayWithValidData.length &&
					arrayWithValidData.map((item, idx) => (
						<Location key={idx.toString()} {...item} setWeather={setWeather} />
					))}
			</Styles.WrapperSearch>
		</Styles.Wrapper>
	);
};

SavedLocations.propTypes = {
	setWeather: func
};

SavedLocations.defaultProps = {
	setWeather: () => {}
};

export default SavedLocations;

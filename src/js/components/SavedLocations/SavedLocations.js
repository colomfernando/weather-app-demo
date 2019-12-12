import React from 'react';
import { storageLocations, validateArray, validateObj } from 'core/utils';
import { func } from 'prop-types';
import Styles from './styles';
import Location from './components/Location';

const SavedLocations = ({ setWeather }) => {
	const storage = storageLocations();
	const savedStorage = storage.getStorage();
	if (!validateArray(savedStorage)) return null;
	const arrayWithValidData = savedStorage.filter(item => validateObj(item));
	return (
		<Styles.Wrapper>
			{arrayWithValidData.map((item, idx) => (
				<Location key={idx.toString()} {...item} setWeather={setWeather} />
			))}
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

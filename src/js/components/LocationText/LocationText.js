import React from 'react';
import { string } from 'prop-types';
import { validateArray } from 'core/utils';
import Styles from './styles';

const LocationText = ({ locationStr }) => {
	if (!locationStr) return null;
	const regex = new RegExp(/_|-/, 'g');
	const parseTimeZone = validateArray(locationStr.split('/')) ? locationStr.split('/').pop() : '';
	const sanitizeLocation = parseTimeZone.replace(regex, ' ');
	if (!sanitizeLocation) return null;
	return <Styles.Location>{sanitizeLocation}</Styles.Location>;
};

LocationText.propTypes = {
	locationStr: string
};

LocationText.defaultProps = {
	locationStr: ''
};

export default LocationText;

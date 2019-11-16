import React from 'react';
import { objectOf, any, string } from 'prop-types';
import { validateArray } from 'core/utils';
import Styles from './styles';

const Currently = ({ location, currently }) => {
	const regex = new RegExp(/_|-/, 'g');
	const parseTimeZone = validateArray(location.split('/')) ? location.split('/').pop() : '';
	const sanitizeLocation = parseTimeZone.replace(regex, ' ');
	console.log('currently :', currently);
	return (
		<Styles.Wrapper>
			<Styles.Location>{sanitizeLocation}</Styles.Location>
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	location: string.isRequired,
	currently: objectOf(any).isRequired
};
export default Currently;

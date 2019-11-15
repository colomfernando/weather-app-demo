import React from 'react';
import { objectOf, any, string } from 'prop-types';
import Styles from './styles';

const Currently = ({ location, currently }) => {
	return (
		<Styles.Wrapper>
			<Styles.Location>{location}</Styles.Location>
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	location: string.isRequired,
	currently: objectOf(any).isRequired
};
export default Currently;

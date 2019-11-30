import React from 'react';
import PropTypes from 'prop-types';
import { getLocationFromBrowser } from 'core/api';
import Styles from './styles';

const Results = ({}) => {
	getLocationFromBrowser().then(res => console.log('res', res));
	return (
		<Styles.Wrapper>
			<div>results</div>
		</Styles.Wrapper>
	);
};

Results.propTypes = {};

export default Results;

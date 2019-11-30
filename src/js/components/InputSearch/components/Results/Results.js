import React from 'react';
import PropTypes from 'prop-types';
import { getLocationFromBrowser } from 'core/api';
import GetLocation from '../GetLocation';
import Styles from './styles';

const Results = ({}) => {
	const handleClick = () => getLocationFromBrowser().then(res => console.log('res', res));
	return (
		<Styles.Wrapper onClick={handleClick}>
			<GetLocation iconName="target" iconSize={15} text="location" />
		</Styles.Wrapper>
	);
};

Results.propTypes = {};

export default Results;

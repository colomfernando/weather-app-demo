import React from 'react';
import { number } from 'prop-types';
import Styles from './styles';

const Loading = ({ size }) => {
	return (
		<Styles.Svg size={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<Styles.Circle cx="50" cy="50" r="42" />
		</Styles.Svg>
	);
};

Loading.propTypes = {
	size: number
};

Loading.defaultProps = {
	size: 50
};

export default Loading;

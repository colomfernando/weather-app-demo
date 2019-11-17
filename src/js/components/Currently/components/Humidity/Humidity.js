import React from 'react';
import { number } from 'prop-types';
import { validateNumber } from 'core/utils';

const Humidity = ({ data }) => {
	if (!validateNumber(data)) return null;
	const parsedData = (data * 100).toFixed();
	return (
		<div>
			<p>Humidity</p>
			<p>{`${parsedData}%`}</p>
		</div>
	);
};

Humidity.propTypes = {
	data: number
};

Humidity.defaultProps = {
	data: null
};

export default Humidity;

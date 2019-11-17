import React from 'react';
import { number } from 'prop-types';
import { validateNumber } from 'core/utils';

const Humidity = ({ data }) => {
	if (!validateNumber) return null;
	return (
		<div>
			<p>Humidity</p>
			<p>{`${data * 100}%`}</p>
		</div>
	);
};

Humidity.propTypes = {
	data: number.isRequired
};

export default Humidity;

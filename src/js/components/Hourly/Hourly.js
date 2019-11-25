import React from 'react';
import Card from 'components/Card';
import { arrayOf, object } from 'prop-types';
import { validateArray, validateObj, createDate } from 'core/utils';

const parseHourly = obj => {
	if (!validateObj(obj)) return null;
	const { icon, time, temperature } = obj;
	if (Number.isNaN(Number(temperature))) return null;
	return {
		icon,
		title: `${createDate(time).hour}:00`,
		temperature: `${temperature.toFixed()}º`
	};
};

const Hourly = ({ data }) => {
	const eachHourly = data.map(obj => parseHourly(obj));
	if (!validateArray(data)) return null;
	return (
		<>
			{eachHourly.map((obj, i) => (
				<Card key={i.toString()} {...obj} />
			))}
		</>
	);
};

Hourly.propTypes = {
	data: arrayOf(object)
};
Hourly.defaultProps = {
	data: []
};

export default Hourly;

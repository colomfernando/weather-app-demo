import React from 'react';
import Card from 'components/Card';
import Swiper from 'react-id-swiper';
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
	const params = {
		spaceBetween: 10,
		slidesPerView: 10,
		grabCursor: true
	};
	return (
		<div>
			<Swiper {...params}>
				{eachHourly.map((obj, i) => (
					<Card className="swiper-slide" key={i.toString()} {...obj} />
				))}
			</Swiper>
		</div>
	);
};

Hourly.propTypes = {
	data: arrayOf(object)
};
Hourly.defaultProps = {
	data: []
};

export default Hourly;

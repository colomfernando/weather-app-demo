import React from 'react';
import { arrayOf, object } from 'prop-types';
import Card from 'components/Card';
import Swiper from 'react-id-swiper';
import { validateArray, validateObj, createDate } from 'core/utils';
import Styles from './styles';

const parseDaily = obj => {
	if (!validateObj(obj)) return null;
	const { icon, time, temperatureHigh, temperatureLow } = obj;
	const tempHighToString = `${Number.parseInt(temperatureHigh, 10)}º`;
	const tempLowToString = `${Number.parseInt(temperatureLow, 10)}º`;
	return {
		icon,
		title: createDate(time).day,
		temperature: `${tempHighToString}/${tempLowToString}`
	};
};

const Daily = ({ data }) => {
	if (!validateArray(data)) return null;
	const eachDaily = data.map(obj => parseDaily(obj));
	const params = {
		spaceBetween: 10,
		slidesPerView: 7,
		grabCursor: true
	};
	return (
		<Styles.Wrapper>
			<Swiper {...params}>
				{eachDaily.map((obj, i) => (
					<Card className="swiper-slide" key={i.toString()} {...obj} />
				))}
			</Swiper>
		</Styles.Wrapper>
	);
};

Daily.propTypes = {
	data: arrayOf(object)
};
Daily.defaultProps = {
	data: []
};

export default Daily;

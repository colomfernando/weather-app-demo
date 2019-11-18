import React from 'react';
import { number } from 'prop-types';
import { validateNumber } from 'core/utils';
import Styles from './styles';

const Temperature = ({ temperature }) => {
	if (!validateNumber(temperature)) return null;
	return <Styles.Text>{`${Number.parseInt(temperature, 10)}º`}</Styles.Text>;
};

Temperature.propTypes = {
	temperature: number
};

Temperature.defaultProps = {
	temperature: null
};

export default Temperature;

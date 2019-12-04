import React from 'react';
import { string } from 'prop-types';
import Styles from './styles';

const Result = ({ name }) => {
	return <div>{name}</div>;
};

Result.propTypes = {
	name: string
};

Result.defaultProps = {
	name: ''
};

export default Result;

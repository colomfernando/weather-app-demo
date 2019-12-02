import React from 'react';
import { string, number, func, bool } from 'prop-types';
import Styles from './styles';

const GetLocation = ({ iconName, iconSize, text, onClick, isActive, ...rest }) => {
	return (
		<Styles.Wrapper onClick={onClick} {...rest}>
			{iconName && <Styles.Icon name={iconName} size={iconSize} isActive={isActive} />}
			<Styles.Text>{text}</Styles.Text>
		</Styles.Wrapper>
	);
};

GetLocation.propTypes = {
	iconName: string,
	text: string,
	iconSize: number,
	onClick: func,
	isActive: bool
};

GetLocation.defaultProps = {
	iconName: '',
	text: '',
	iconSize: 15,
	onClick: () => {},
	isActive: false
};

export default GetLocation;

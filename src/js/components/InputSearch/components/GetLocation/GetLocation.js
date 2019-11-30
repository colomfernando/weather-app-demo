import React from 'react';
import { string, number, func } from 'prop-types';
import Styles from './styles';

const GetLocation = ({ iconName, iconSize, text, onClick, ...rest }) => {
	return (
		<Styles.Wrapper onClick={onClick} {...rest}>
			{iconName && <Styles.Icon name={iconName} size={iconSize} />}
			<Styles.Text>{text}</Styles.Text>
		</Styles.Wrapper>
	);
};

GetLocation.propTypes = {
	iconName: string,
	text: string,
	iconSize: number,
	onClick: func
};

GetLocation.defaultProps = {
	iconName: '',
	text: '',
	iconSize: 15,
	onClick: () => {}
};

export default GetLocation;

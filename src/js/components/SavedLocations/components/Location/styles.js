import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';

const Wrapper = styled.button`
	display: inline-flex;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	padding: 10px;
	flex: 1 0 auto;
	&:not(:last-child) {
		margin-bottom: 10px;
	}
	${mediaQuery.tablet`
			&:not(:last-child) {
				margin-bottom: 0;
				margin-right: 10px;
			}
	`}
`;
const Name = styled.p`
	color: ${colors.white};
	font-size: 12px;
`;

export default {
	Wrapper,
	Name
};

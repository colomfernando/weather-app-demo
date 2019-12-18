import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.button`
	align-self: flex-start;
	border-radius: 5px;
	padding: 5px;
`;
const Name = styled.p`
	color: ${colors.black};
	font-size: 14px;
`;

export default {
	Wrapper,
	Name
};

import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.div`
	width: 100%;
	padding: 20px 15px;
	background-color: ${colors.secondary};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Location = styled.h3`
	color: ${colors.white};
`;

export default { Wrapper, Location };

import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	width: 100%;
	max-width: 190px;
	&:last-child {
		margin-bottom: initial;
	}
`;

const Text = styled.p`
	font-size: 16px;
	color: ${colors.white};
`;

export default { Wrapper, Text };

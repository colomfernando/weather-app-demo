import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	background-color: ${colors.white};
	border-bottom: 1px solid ${colors.grey[200]};
	padding: 10px;
	&:last-child {
		border-bottom: none;
	}
`;

const Day = styled.p`
	text-transform: lowercase;
	&::first-letter {
		text-transform: capitalize;
	}
`;

export default { Wrapper, Day };

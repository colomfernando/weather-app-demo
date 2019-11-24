import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
`;

const WrapperTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
`;
const Title = styled.h4`
	color: ${({ active }) => (active ? colors.white : colors.grey[600])};
	text-transform: lowercase;
	cursor: pointer;
	margin-right: 20px;
	&:last-child {
		margin-right: 0;
	}
	&::first-letter {
		text-transform: capitalize;
	}
`;

const WrapperChildrens = styled.div`
	margin: auto 0;
`;

export default { Wrapper, WrapperTitle, Title, WrapperChildrens };

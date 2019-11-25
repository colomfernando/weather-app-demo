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

const Line = styled.div`
	position: relative;
	display: flex;
	&:after {
		content: '';
		position: absolute;
		width: ${({ lineWidth }) => lineWidth && `${lineWidth}%`};
		height: 3px;
		background-color: ${colors.white};
		bottom: -10px;
		left: ${({ active, lineWidth }) => (lineWidth && active !== 0 ? `${lineWidth * active}%` : 0)};
		transition: all 0.07s linear;
	}
`;

const Title = styled.p`
	position: relative;
	flex-grow: 1;
	width: 65px;
	color: ${({ active }) => (active ? colors.white : colors.grey[600])};
	text-transform: lowercase;
	cursor: pointer;
	text-align: center;
	&::first-letter {
		text-transform: capitalize;
	}
`;

const WrapperChildrens = styled.div`
	margin: auto 0;
	display: flex;
	padding: 0 20px 5px;
	overflow-x: auto;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: ${colors.grey[600]};
	}
`;

export default { Wrapper, WrapperTitle, Title, Line, WrapperChildrens };

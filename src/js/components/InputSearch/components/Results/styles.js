import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';

const Wrapper = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	z-index: 5;
	display: flex;
	flex-flow: column nowrap;
	border-top: 1px solid ${colors.black};
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: ${colors.white};
	padding: 10px;
	${mediaQuery.tablet`
		left: 10px;
		width: calc(100% - 20px);
	`}
`;

const WrapperResults = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 10px;
	height: auto;
	overflow-y: auto;
	max-height: 215px;
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

const Attribution = styled.span`
	color: ${colors.black};
	font-size: 10px;
	padding: 5px 0 0;
`;

export default {
	Wrapper,
	WrapperResults,
	Attribution
};

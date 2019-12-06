import styled from 'styled-components';
import { colors } from 'theme';

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
`;

const WrapperResults = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 10px;
`;

export default {
	Wrapper,
	WrapperResults
};

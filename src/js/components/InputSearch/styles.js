import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	position: relative;
	max-width: 400px;
	width: 100%;
	${mediaQuery.tablet`
		padding: 0 10px;
		max-width: initial;
	`}
`;

const WrapperInput = styled.div`
	display: flex;
	border-radius: 5px;
	background-color: ${colors.white};
	padding: 10px 20px;
	flex-wrap: wrap;
	${({ hasResults }) =>
		hasResults &&
		`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	`}
	width: 100%;
`;
const Input = styled.input`
	outline: none;
	width: 90%;
	background-color: transparent;
	border: none;
	color: ${colors.grey[500]};
	&::placeholder {
		color: ${colors.grey[500]};
	}
`;
const Icon = styled(IconComponent)`
	margin-left: auto;
	fill: ${colors.black};
`;

const Error = styled.span`
	flex-basis: 100%;
	font-size: 12px;
	color: ${colors.error.main};
`;

export default {
	Wrapper,
	WrapperInput,
	Icon,
	Input,
	Error
};

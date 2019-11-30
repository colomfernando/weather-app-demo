import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	position: relative;
	max-width: 400px;
	width: 100%;
`;

const WrapperInput = styled.div`
	display: flex;
	border-radius: 5px;
	background-color: ${colors.white};
	padding: 10px 20px;
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

export default {
	Wrapper,
	WrapperInput,
	Icon,
	Input
};

import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 10px;
	border-radius: 20px;
	background-color: ${colors.white};
	padding: 10px 20px;
	max-width: 300px;
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
	Icon,
	Input
};

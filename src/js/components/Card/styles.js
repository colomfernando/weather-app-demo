import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 10px 15px;
	height: 100%;
	margin-right: 10px;
	&:first-child {
		margin-left: auto;
	}
	&:last-child {
		margin-right: auto;
	}
`;

const Title = styled.p`
	font-size: 18px;
	color: ${colors.white};
`;

const Temperature = styled.p`
	font-size: 28px;
	color: ${colors.white};
	margin: 15px 0;
`;
const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, Title, Temperature, Icon };

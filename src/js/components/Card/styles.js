import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 10px;
	height: 100%;
`;

const Title = styled.p`
	fint-size: 20px;
	color: ${colors.white};
`;

const Temperature = styled.p`
	font-size: 32px;
	color: ${colors.white};
	margin: 15px 0;
`;
const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, Title, Temperature, Icon };

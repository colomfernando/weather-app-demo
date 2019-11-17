import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	width: 100%;
	padding: 30px 20px;
	background-color: ${colors.primary};
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Location = styled.h3`
	color: ${colors.white};
	font-size: 28px;
	margin-bottom: 20px;
`;

const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, Location, Icon };

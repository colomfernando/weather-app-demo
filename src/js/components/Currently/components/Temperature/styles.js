import styled from 'styled-components';
import { colors } from 'theme';

const baseText = styled.p`
	color: ${colors.white};
	font-size: 18px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin: 20px 0;
`;

const TemperatureText = styled(baseText)`
	font-size: 64px;
`;

const FeelLikeText = styled(baseText)``;

export default { Wrapper, TemperatureText, FeelLikeText };

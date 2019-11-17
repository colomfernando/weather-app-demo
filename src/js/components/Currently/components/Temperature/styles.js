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
	margin-right: 20px;
	font-size: 64px;
`;

const FeelLikeText = styled(baseText)`
	margin-top: 10px;
`;

export default { Wrapper, TemperatureText, FeelLikeText };

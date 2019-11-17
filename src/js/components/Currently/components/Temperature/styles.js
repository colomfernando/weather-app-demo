import styled from 'styled-components';
import { colors } from 'theme';

const baseText = styled.p`
	color: ${colors.white};
	font-size: 16px;
`;

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const WrapperFeel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const TemperatureText = styled(baseText)`
	font-size: 80px;
	margin-bottom: 10px;
`;

const FeelLikeText = styled(baseText)`
	margin-bottom: 10px;
`;

export default { Wrapper, WrapperFeel, TemperatureText, FeelLikeText };

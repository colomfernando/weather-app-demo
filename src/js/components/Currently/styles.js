import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 30px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, Location, Icon };

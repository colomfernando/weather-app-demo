import styled from 'styled-components';
import { colors } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	padding: 30px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

const WrapperIcon = styled.div`
	display: flex;
	justify-content: center;
	padding: 25px;
`;
const WrapperInfo = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 200px;
`;
const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, WrapperIcon, WrapperInfo, Icon };

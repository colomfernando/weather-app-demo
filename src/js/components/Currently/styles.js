import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	padding: 30px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	${mediaQuery.mobile`
		padding: 0;
		width: 100%;
	`};
`;

const WrapperIcon = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
`;
const WrapperInfo = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 250px;
	${mediaQuery.mobile`
		width: 70%;
		margin-left: auto;
	`}
`;
const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, WrapperIcon, WrapperInfo, Icon };

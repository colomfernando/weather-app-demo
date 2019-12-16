import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';
import IconComponent from 'components/Icon';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	padding: 10px;
	height: 100%;
	flex: 1 0 120px;
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
	${mediaQuery.mobile`
		font-size: 20px;
	`}
`;
const Icon = styled(IconComponent)`
	fill: ${colors.white};
`;

export default { Wrapper, Title, Temperature, Icon };

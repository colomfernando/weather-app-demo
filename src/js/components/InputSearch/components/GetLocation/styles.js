import styled from 'styled-components';
import IconComponent from 'components/Icon';
import { colors, setTransition } from 'theme';

const Wrapper = styled.button`
	display: inline-flex;
	align-items: center;
	align-self: flex-start;
	transition: ${setTransition({ easingType: 'easeInOut' })};
	&:hover {
		svg {
			fill: ${colors.primary};
		}
		p {
			color: ${colors.primary};
		}
	}
`;
const Icon = styled(IconComponent)`
	margin-right: 5px;
	stroke-width: 10px;
	stroke: ${colors.primary};
	fill: ${({ isActive }) => (isActive ? colors.primary : 'none')};
`;

const Text = styled.p`
	font-size: 16px;
`;

export default {
	Wrapper,
	Icon,
	Text
};

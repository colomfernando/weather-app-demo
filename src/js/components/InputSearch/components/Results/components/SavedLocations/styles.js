import styled from 'styled-components';
import { colors } from 'theme';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-top: 10px;
`;

const WrapperSearch = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Title = styled.h4`
	font-size: 14px;
	margin-bottom: 5px;
	padding: 0 5px;
	color: ${colors.black};
`;
export default {
	Wrapper,
	WrapperSearch,
	Title
};

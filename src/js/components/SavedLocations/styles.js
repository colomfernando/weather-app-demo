import styled from 'styled-components';
import { mediaQuery } from 'theme';

const Wrapper = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin-right: auto;
	${mediaQuery.tablet`
	overflow: hidden;
		flex-flow: row nowrap;
	`}
`;

export default {
	Wrapper
};

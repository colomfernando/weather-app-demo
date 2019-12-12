import styled from 'styled-components';
import { colors, mediaQuery } from 'theme';

const Wrapper = styled.div`
	display: flex;
	margin-right: auto;
	flex-flow: column nowrap;
	${mediaQuery.tablet`
		align-items: center;
		margin-bottom: auto;
	`}
`;

const WrapperSearch = styled.div`
	display: flex;
	flex-flow: column nowrap;
	${mediaQuery.tablet`
		overflow: hidden;
		flex-flow: row nowrap;
		overflow: auto;
		padding-bottom: 5px;
			&::-webkit-scrollbar {
			width: 5px;
			height: 5px;
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color: ${colors.grey[600]};
		}
	`}
`;

const Title = styled.h4`
	font-size: 14px;
	margin-bottom: 10px;
	color: ${colors.white};
`;
export default {
	Wrapper,
	WrapperSearch,
	Title
};

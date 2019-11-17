import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 15% 65% 20%;
	justify-items: center;
	width: 100vw;
	height: 100vh;
`;

const Header = styled.header``;
const Body = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	margin-right: 150px;
`;
const Footer = styled.footer``;

const Img = styled.img`
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: -1;
	filter: brightness(50%);
`;

export default {
	Wrapper,
	Img,
	Header,
	Body,
	Footer
};

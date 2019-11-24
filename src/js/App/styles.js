import styled from 'styled-components';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 20% 55% 25%;
	justify-items: center;
	width: 100vw;
	height: 100vh;
`;

const Header = styled.header`
	padding: 15px 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
`;

const Body = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	margin-right: 80px;
`;

const Footer = styled.footer`
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
`;

const Img = styled.img`
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: -1;
	filter: brightness(40%);
`;

export default {
	Wrapper,
	Img,
	Header,
	Body,
	Footer
};

import styled from 'styled-components';

const Svg = styled.svg`
	width: ${({ size }) => `${size}px`};
	height: auto;
`;

const Circle = styled.circle`
	max-width: 100px;
	fill: transparent;
	stroke: red;
	stroke-width: 10;
	stroke-dasharray: 265;
	stroke-linecap: round;
	transform-origin: 50% 50%;
`;

export default { Svg, Circle };

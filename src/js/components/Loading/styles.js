import styled, { keyframes } from 'styled-components';
import { colors } from 'theme';

const loadingAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  50%,
  75% {
    stroke-dashoffset: 45;
    transform: rotate(45deg);
  }
	100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const Svg = styled.svg`
	width: ${({ size }) => `${size}px`};
	height: auto;
	animation: 1.5s infinite both ${svgAnimation};
`;

const Circle = styled.circle`
	max-width: 100px;
	fill: transparent;
	stroke: ${colors.secondary};
	stroke-width: 10;
	stroke-dasharray: 283;
	stroke-linecap: round;
	transform-origin: 50% 50%;
	animation: 1.5s ease-in-out infinite both ${loadingAnimation};
`;

export default { Svg, Circle };

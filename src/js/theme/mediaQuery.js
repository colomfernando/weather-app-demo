import { css } from 'styled-components';

const breakpoints = {
	xs: 320,
	sm: 600,
	md: 1024,
	lg: 1280,
	xl: 1440
};

const getMin = key => `@media screen and (min-width: ${breakpoints[key]}px)`;
const getMax = key => `@media screen and (max-width: ${breakpoints[key] - 1}px)`;

export const devices = {
	mobile: getMax('sm'),
	tablet: getMax('md'),
	tabletLg: getMax('lg'),
	onlyDesktop: getMin('lg'),
	desktopSm: getMax('xl'),
	desktopLg: getMin('xl')
};

const mediaQuery = {
	mobile: (...args) => css`
		${devices.mobile} {
			${css(...args)}
		}
	`,
	tablet: (...args) => css`
		${devices.tablet} {
			${css(...args)}
		}
	`,
	tabletLg: (...args) => css`
		${devices.tabletLg} {
			${css(...args)}
		}
	`,
	onlyDesktop: (...args) => css`
		${devices.onlyDesktop} {
			${css(...args)}
		}
	`,
	desktopSm: (...args) => css`
		${devices.desktopSm} {
			${css(...args)}
		}
	`,
	desktopLg: (...args) => css`
		${devices.desktopLg} {
			${css(...args)}
		}
	`
};

export default mediaQuery;

import React from 'react';
import { string, number } from 'prop-types';
import icons from './icons.json';

const Icon = ({ name, size }) => {
	if (!name || typeof name !== 'string') return null;
	const selectedIcon = icons[name];
	if (!selectedIcon) return null;
	const { viewBox, paths, colors } = selectedIcon;
	return (
		<svg viewBox={viewBox} width={`${size}px`} height={`${size}px`}>
			{paths.map((d, i) => (
				<path key={i.toString()} d={d} fill={colors && colors.length && colors[i]} />
			))}
		</svg>
	);
};

Icon.propTypes = {
	name: string.isRequired,
	size: number
};

Icon.defaultProps = {
	size: 30
};

export default Icon;

import React from 'react';
import { string, number } from 'prop-types';
import icons from './icons.json';
import Styles from './styles';

const Icon = ({ name, size, ...rest }) => {
	if (!name) return null;
	const selectedIcon = icons[name];
	if (!selectedIcon) return null;
	const { viewBox, paths, colors } = selectedIcon;
	return (
		<Styles.Svg {...rest} viewBox={viewBox} width={`${size}px`} height={`${size}px`}>
			{paths.map((d, i) => (
				<path key={i.toString()} d={d} fill={colors && colors.length && colors[i]} />
			))}
		</Styles.Svg>
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

import React, { useState } from 'react';
import { string, arrayOf, oneOfType, func, node } from 'prop-types';
import { validateArray } from 'core/utils';
import Styles from './styles';

const Tabs = ({ titles, childrens }) => {
	if (!validateArray(titles) || !validateArray(childrens)) return null;
	if (titles.some(title => typeof title !== 'string')) return null;
	const [actualIdx, setActualIdx] = useState(0);
	const findTitleIdx = name => titles.indexOf(name);
	return (
		<Styles.Wrapper>
			<Styles.WrapperTitle>
				{!!childrens &&
					!!childrens.length &&
					childrens[actualIdx] &&
					!!titles &&
					!!titles.length &&
					titles.map((title, i) => (
						<Styles.Title
							active={titles[actualIdx] === title}
							onClick={() => setActualIdx(findTitleIdx(title))}
							key={i.toString()}
						>
							{title}
						</Styles.Title>
					))}
			</Styles.WrapperTitle>
			<Styles.WrapperChildrens>
				{!!childrens && !!childrens.length && childrens[actualIdx] && childrens[actualIdx]}
			</Styles.WrapperChildrens>
		</Styles.Wrapper>
	);
};

Tabs.propTypes = {
	titles: arrayOf(string).isRequired,
	childrens: arrayOf(oneOfType([func, node])).isRequired
};

export default Tabs;

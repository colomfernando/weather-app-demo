import React from 'react';
import Styles from './styles';

const InputSearch = () => {
	return (
		<Styles.Wrapper>
			<Styles.Input placeholder="search location" />
			<Styles.Icon name="search" size={20} />
		</Styles.Wrapper>
	);
};
export default InputSearch;

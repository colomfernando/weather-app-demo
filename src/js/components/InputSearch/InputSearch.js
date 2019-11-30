import React, { useState } from 'react';
import Styles from './styles';
import Results from './components/Results';

const InputSearch = () => {
	const [showResults, setShowResults] = useState(false);
	const handleClick = () => setShowResults(!showResults);
	return (
		<Styles.Wrapper>
			<Styles.WrapperInput hasResults={showResults}>
				<Styles.Input placeholder="search location" onClick={handleClick} />
				<Styles.Icon name="search" size={25} />
			</Styles.WrapperInput>
			{showResults && <Results />}
		</Styles.Wrapper>
	);
};
export default InputSearch;

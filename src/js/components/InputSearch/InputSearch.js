import React, { useState, useEffect, useRef, useCallback } from 'react';
import { func } from 'prop-types';
import { debounce } from 'core/utils';
import Styles from './styles';
import Results from './components/Results';

const InputSearch = ({ getLocationResults }) => {
	const [showResults, setShowResults] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [searchVal, setSearchVal] = useState('');
	const node = useRef(null);
	const handleOnChange = event => setSearchVal(event.target.value);
	const debounceGetLocationResults = useCallback(debounce(getLocationResults, 200), []);
	const handleOnClick = event => {
		if (!node.current.contains(event.target)) {
			setIsOpen(false);
			setSearchVal('');
			return setShowResults(false);
		}
		setShowResults(true);
		return setIsOpen(true);
	};

	const handleClickResult = value => {
		if (!value) return;
		setSearchVal(value);
		setIsOpen(false);
	};

	useEffect(() => {
		document.addEventListener('click', handleOnClick);
		return document.removeEventListener('click', handleOnChange);
	}, []);
	useEffect(() => {
		if (searchVal.length > 2) debounceGetLocationResults(searchVal);
	}, [searchVal]);
	return (
		<Styles.Wrapper ref={node}>
			<Styles.WrapperInput hasResults={showResults}>
				<Styles.Input
					placeholder="search location"
					onClick={handleOnClick}
					value={searchVal}
					onChange={handleOnChange}
				/>
				<Styles.Icon name="search" size={25} />
				{searchVal.length < 3 && isOpen && <Styles.Error>Enter at least 3 characters</Styles.Error>}
			</Styles.WrapperInput>
			{showResults && <Results handleClickResult={handleClickResult} />}
		</Styles.Wrapper>
	);
};

InputSearch.propTypes = {
	getLocationResults: func
};

InputSearch.defaultProps = {
	getLocationResults: () => {}
};
export default InputSearch;

import React, { useState, useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { getWeather } from 'core/api';
import Styles from './styles';

const App = () => {
	const [currently, setCurrently] = useState({});

	useEffect(() => {
		getWeather({ lat: '61.5240097', lon: '105.3187561', units: 'us' }).then(res =>
			setCurrently(res.currently)
		);
	}, []);
	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				<Currently location="New york" currently={currently} />
			</Styles.Wrapper>
		</>
	);
};

export default App;

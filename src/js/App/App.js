import React, { useState, useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { getWeather } from 'core/api';
import Styles from './styles';

const App = () => {
	const [currently, setCurrently] = useState({});
	const [daily, setDaily] = useState({});
	const [hourly, setHourly] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getWeather({ lat: '61.5240097', lon: '105.3187561', units: 'us' })
			.then(res => {
				setLoading(true);
				const { currently: resCurrently = {}, daily: resDaily = {}, hourly: resHourly = {} } = res;
				setCurrently(resCurrently);
				setDaily(resDaily);
				setHourly(resHourly);
			})
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);
	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				{loading ? <div>Loading</div> : <Currently location="New york" currently={currently} />}
			</Styles.Wrapper>
		</>
	);
};

export default App;

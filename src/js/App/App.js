import React, { useState, useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import Loading from 'components/Loading';
import getWeather from 'core/api';
import Styles from './styles';

const App = () => {
	const [timezone, setTimeZone] = useState('');
	const [currently, setCurrently] = useState({});
	const [daily, setDaily] = useState({});
	const [hourly, setHourly] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getWeather({ lat: '-34.603722', lon: '-58.381592', units: 'si' })
			.then(res => {
				setLoading(true);
				const {
					currently: resCurrently = {},
					daily: resDaily = {},
					hourly: resHourly = {},
					timezone: resTimeZone = ''
				} = res;
				setTimeZone(resTimeZone);
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
				{loading ? <Loading /> : <Currently location={timezone} currently={currently} />}
			</Styles.Wrapper>
		</>
	);
};

export default App;

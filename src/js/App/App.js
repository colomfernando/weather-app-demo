import React, { useState, useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import Daily from 'components/Daily';
import LocationText from 'components/LocationText';
import InputSearch from 'components/InputSearch/InputSearch';
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
				console.log('res :', res);
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
				<Styles.Img src="assets/bk.jpg" />
				<Styles.Header>
					<InputSearch />
					<LocationText locationStr={timezone} />
				</Styles.Header>
				<Styles.Body>
					<Currently currently={currently} />
				</Styles.Body>
				<Styles.Footer>
					<Daily data={daily.data} />
				</Styles.Footer>
			</Styles.Wrapper>
		</>
	);
};

export default App;

import React, { useState, useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { validateObj } from 'core/utils';
import Daily from 'components/Daily';
import Hourly from 'components/Hourly';
import InputSearch from 'components/InputSearch/InputSearch';
import { getWeather } from 'core/api';
import Tabs from 'components/Tabs';
import Styles from './styles';

const App = ({ getWeatherFromLocation }) => {
	const [timezone, setTimeZone] = useState('');
	const [currently, setCurrently] = useState({});
	const [daily, setDaily] = useState({});
	const [hourly, setHourly] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	// useEffect(() => {
	// 	getWeather({ lat: '35.6895000', lon: '139.6917100', units: 'si' })
	// 		.then(res => {
	// 			setLoading(true);
	// 			const {
	// 				currently: resCurrently = {},
	// 				daily: resDaily = {},
	// 				hourly: resHourly = {},
	// 				timezone: resTimeZone = ''
	// 			} = res;
	// 			setTimeZone(resTimeZone);
	// 			setCurrently(resCurrently);
	// 			setDaily(resDaily);
	// 			setHourly(resHourly);
	// 		})
	// 		.catch(() => setError(true))
	// 		.finally(() => setLoading(false));
	// }, []);
	getWeatherFromLocation();
	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				<Styles.Img src="assets/bk.jpg" />
				<Styles.Header>
					<InputSearch />
				</Styles.Header>
				<Styles.Body>
					<Currently currently={currently} timezone={timezone} />
				</Styles.Body>
				<Styles.Footer>
					{!loading && (
						<Tabs
							titles={['daily', 'hourly']}
							childrens={[
								validateObj(daily) && <Daily data={daily.data} />,
								validateObj(hourly) && <Hourly data={hourly.data} />
							]}
						/>
					)}
				</Styles.Footer>
			</Styles.Wrapper>
		</>
	);
};

export default App;

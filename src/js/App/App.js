import React, { useEffect } from 'react';
import { func } from 'prop-types';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { useSelector } from 'react-redux';
import { validateObj } from 'core/utils';
import Daily from 'components/Daily';
import Hourly from 'components/Hourly';
import InputSearch from 'components/InputSearch/InputSearch';
import Tabs from 'components/Tabs';
import Styles from './styles';

const App = ({ getWeatherFromLocation }) => {
	const { loading, currently, timezone, daily, hourly, error } = useSelector(state => state);
	useEffect(() => {
		getWeatherFromLocation();
	}, []);
	console.log('error :', error);
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

App.propTypes = {
	getWeatherFromLocation: func
};

App.defaultProps = {
	getWeatherFromLocation: () => {}
};

export default App;

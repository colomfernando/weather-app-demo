import React from 'react';
import GlobalStyle from 'js/GlobalStyle';
import { getWeather } from 'core/api';
import Styles from './styles';

const App = () => {
	getWeather({ lat: '-34.590531500000004', lon: '-58.4178887' }).then(console.log);
	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				<Styles.Currently>
					<div>currently</div>
				</Styles.Currently>
			</Styles.Wrapper>
		</>
	);
};

export default App;

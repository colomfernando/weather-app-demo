import React from 'react';
import GlobalStyle from 'js/GlobalStyle';
import CardDay from 'components/CardDay';
import Styles from './styles';

const App = () => (
	<>
		<GlobalStyle />
		<Styles.Wrapper>
			<CardDay day="monday" tempeture="30" icon="sun" />
			<CardDay day="monday" tempeture="30" icon="sun" />
			<CardDay day="monday" tempeture="30" icon="sun" />
			<CardDay day="monday" tempeture="30" icon="sun" />
		</Styles.Wrapper>
	</>
);

export default App;

import React from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { useSelector } from 'react-redux';
import { validateObj } from 'core/utils';
import Daily from 'components/Daily';
import Hourly from 'components/Hourly';
import InputSearch from 'components/InputSearch';
import Tabs from 'components/Tabs';
import SkeletonCard from 'components/SkeletonCard';

import Styles from './styles';

const App = () => {
	const { loading, currently, timezone, daily, hourly } = useSelector(state => state);
	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				<Styles.Img src="assets/bk.jpg" />
				<Styles.Header>
					<InputSearch />
				</Styles.Header>
				<Styles.Body>
					<Currently loading={loading} currently={currently} timezone={timezone} />
				</Styles.Body>
				<Styles.Footer>
					{loading && (
						<Styles.WrapperSkeleton>
							{[...Array(12).keys()].map(idx => (
								<SkeletonCard key={idx.toString()} />
							))}
						</Styles.WrapperSkeleton>
					)}
					{!loading && validateObj(daily) && validateObj(hourly) && (
						<Tabs
							titles={['daily', 'hourly']}
							childrens={[
								<Daily key="daily" data={daily.data} />,
								<Hourly key="hourly" data={hourly.data} />
							]}
						/>
					)}
				</Styles.Footer>
			</Styles.Wrapper>
		</>
	);
};

export default App;

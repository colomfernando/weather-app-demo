import React, { useEffect } from 'react';
import GlobalStyle from 'js/GlobalStyle';
import Currently from 'components/Currently';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import { validateObj } from 'core/utils';
import Daily from 'components/Daily';
import Hourly from 'components/Hourly';
import InputSearch from 'components/InputSearch';
import Tabs from 'components/Tabs';
import SkeletonCard from 'components/SkeletonCard';

import Styles from './styles';

const App = ({ getStorageLocation }) => {
	const { loading, currently, timezone, daily, hourly } = useSelector(state => state);

	useEffect(() => {
		getStorageLocation();
	}, []);

	return (
		<>
			<GlobalStyle />
			<Styles.Wrapper>
				<Styles.Header>
					<InputSearch />
				</Styles.Header>
				<Styles.Body>
					<Currently loading={loading} currently={currently} timezone={timezone} />
				</Styles.Body>
				{loading && (
					<Styles.Footer>
						<Styles.WrapperSkeleton>
							{[...Array(12).keys()].map(idx => (
								<SkeletonCard key={idx.toString()} />
							))}
						</Styles.WrapperSkeleton>
					</Styles.Footer>
				)}
				{!loading && validateObj(daily) && validateObj(hourly) && (
					<Styles.Footer>
						<Tabs
							titles={['daily', 'hourly']}
							childrens={[
								<Daily key="daily" data={daily.data} />,
								<Hourly key="hourly" data={hourly.data} />
							]}
						/>
					</Styles.Footer>
				)}
			</Styles.Wrapper>
		</>
	);
};

App.propTypes = {
	getStorageLocation: func
};

App.defaultProps = {
	getStorageLocation: () => {}
};
export default App;

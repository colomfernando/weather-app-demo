import React from 'react';
import { objectOf, any, string, bool } from 'prop-types';
import { createObjByKeys, validateObj } from 'core/utils';
import LocationText from 'components/LocationText';
import Styles from './styles';
import Temperature from './components/Temperature';
import Row from './components/Row';
import SkeletonCurrently from './components/SkeletonCurrently';

const Currently = ({ currently, timezone, loading }) => {
	const { temperature, icon } = currently;
	const parsedData = createObjByKeys(['apparentTemperature', 'humidity', 'pressure'], currently);
	return (
		<Styles.Wrapper>
			{loading && <SkeletonCurrently />}
			{!loading && icon && (
				<Styles.WrapperIcon>
					<Styles.Icon name={icon} size={60} />
				</Styles.WrapperIcon>
			)}
			{!loading && temperature && (
				<>
					<Styles.WrapperInfo>
						<LocationText locationStr={timezone} />
						<Temperature temperature={temperature} />
						{validateObj(parsedData) &&
							Object.keys(parsedData).map(key => (
								<Row key={key} title={key} value={parsedData[key]} />
							))}
					</Styles.WrapperInfo>
				</>
			)}
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	currently: objectOf(any),
	timezone: string,
	loading: bool
};

Currently.defaultProps = {
	currently: {},
	timezone: '',
	loading: false
};
export default Currently;

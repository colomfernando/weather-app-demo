import React from 'react';
import { objectOf, any } from 'prop-types';
import { createObjByKeys, validateObj } from 'core/utils';
import Styles from './styles';
import Temperature from './components/Temperature';
import Row from './components/Row';

const Currently = ({ currently }) => {
	const { temperature, icon } = currently;
	const parsedData = createObjByKeys(['apparentTemperature', 'humidity'], currently);
	return (
		<Styles.Wrapper>
			{icon && (
				<Styles.WrapperIcon>
					<Styles.Icon name={icon} size={60} />
				</Styles.WrapperIcon>
			)}
			{temperature && (
				<Styles.WrapperInfo>
					<Temperature temperature={temperature} />
					{validateObj(parsedData) &&
						Object.keys(parsedData).map(key => (
							<Row key={key} title={key} value={parsedData[key]} />
						))}
				</Styles.WrapperInfo>
			)}
		</Styles.Wrapper>
	);
};

Currently.propTypes = {
	currently: objectOf(any).isRequired
};
export default Currently;

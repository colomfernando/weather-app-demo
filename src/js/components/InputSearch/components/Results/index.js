import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from 'core/redux/weather';
import Resutls from './Results';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			getWeatherFromLocation: operations.getWeatherFromLocation,
			setWeather: operations.setWeather
		},
		dispatch
	);

export default connect(null, mapDispatchToProps)(Resutls);

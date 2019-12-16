import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from 'core/redux/weather';
import InputSearch from './InputSearch';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{ getLocationResults: operations.getLocationResults, setWeather: operations.setWeather },
		dispatch
	);

export default connect(null, mapDispatchToProps)(InputSearch);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from 'core/redux/weather';
import SavedLocations from './SavedLocations';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setWeather: operations.setWeather
		},
		dispatch
	);

export default connect(null, mapDispatchToProps)(SavedLocations);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import operations from 'core/redux/operations';
import InputSearch from './InputSearch';

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getLocationResults: operations.getLocationResults }, dispatch);

export default connect(null, mapDispatchToProps)(InputSearch);

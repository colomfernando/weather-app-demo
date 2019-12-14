import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations } from 'core/redux/weather';
import App from './App';

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getStorageLocation: operations.getStorageLocation }, dispatch);

export default connect(null, mapDispatchToProps)(App);

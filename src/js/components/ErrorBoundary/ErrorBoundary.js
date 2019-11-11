import React from 'react';
import { node } from 'prop-types';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	componentDidCatch(error) {
		this.setState(error);
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;
		if (error) return null;
		return children;
	}
}

ErrorBoundary.propTypes = {
	children: node.isRequired
};

export default ErrorBoundary;

const easing = {
	easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
	easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
	easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
	sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

const duration = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};

const setTransition = ({ property = 'all', durationType = 'standard', easingType = 'easeIn' }) => {
	return `${property} ${duration[durationType]}ms ${easing[easingType]}`;
};

export default setTransition;

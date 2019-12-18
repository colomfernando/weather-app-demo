import React from 'react';
import ContentLoader from 'react-content-loader';
import Styles from './styles';

const SkeletonCurrently = () => {
	return (
		<Styles.Wrapper>
			<ContentLoader
				height={308}
				width={250}
				speed={1}
				primaryColor="#e0e0e0"
				secondaryColor="#9e9e9e"
			>
				<rect x="0" y="0" width="70" height="70" />
				<rect x="79" y="5" width="180" height="30" />
				<rect x="79" y="50" width="100" height="55" />
				<rect x="75" y="110" width="290" height="15" />
				<rect x="80" y="173" width="250" height="18" />
				<rect x="80" y="200" width="250" height="18" />
			</ContentLoader>
		</Styles.Wrapper>
	);
};

export default SkeletonCurrently;

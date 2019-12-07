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
				<rect x="25" y="25" width="60" height="60" />
				<rect x="110" y="10" width="180" height="35" />
				<rect x="110" y="60" width="80" height="75" />
				<rect x="110" y="144" width="250" height="18" />
				<rect x="110" y="173" width="250" height="18" />
				<rect x="110" y="200" width="250" height="18" />
			</ContentLoader>
		</Styles.Wrapper>
	);
};

export default SkeletonCurrently;

import React from 'react';
import ContentLoader from 'react-content-loader';
import Styles from './styles';

const SkeletonCard = () => {
	return (
		<Styles.Wrapper>
			<ContentLoader
				height={136}
				width={140}
				speed={1}
				primaryColor="#e0e0e0"
				secondaryColor="#9e9e9e"
			>
				<rect x="30" y="20" width="80" height="18" />
				<rect x="30" y="48" width="80" height="28" />
				<rect x="30" y="90" width="80" height="40" />
			</ContentLoader>
		</Styles.Wrapper>
	);
};

export default SkeletonCard;

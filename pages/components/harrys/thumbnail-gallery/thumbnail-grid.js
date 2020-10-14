import React from 'react';
import Thumbnail from './thumbnail';
import { useSelector} from "react-redux";

const ThumbnailGrid = () => {
	const currentProduct = useSelector(state => state.app.currentProduct)
	return (
		<div style={styles}>
			{currentProduct ? currentProduct.imgUrl.map((item, i) => (
				<Thumbnail 
					key={item.url}
					imgUrl={item.url}
					index={i}
				/>
			)) : null}
		</div>
	);
};

const styles = {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'warp',
	maxWidth: '80px',
	margin: '2px 15px',
	justifyContent: 'left'
};

export default ThumbnailGrid;

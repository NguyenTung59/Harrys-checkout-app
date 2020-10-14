import React from 'react';
import {useSelector} from 'react-redux'

const ActiveThumbnailWindow = () => {
	const activeThumbnail = useSelector(state => state.app.currentImage)
	return (
		<div style={styles}>
			<img src={activeThumbnail ? activeThumbnail : null} style={ImageStyle} alt="#" />
		</div>
	);
};

const ImageStyle = {
	width: '100%',
	height: '100%'
};

const styles = {
	width: '75%',
	background: '#efefef'
};

export default ActiveThumbnailWindow;

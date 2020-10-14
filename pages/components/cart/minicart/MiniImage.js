import React from 'react';
// import '../index.css';
import { useSelector} from "react-redux";

const MiniImage = () => {
	const currentImage = useSelector(state => state.app.currentImage)
	return (
		<div className="mini-image">
			<img src={currentImage} alt="#" />
		</div>
	);
};

export default MiniImage;

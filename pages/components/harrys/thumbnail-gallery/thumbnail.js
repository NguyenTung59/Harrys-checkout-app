import React, { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { changeImage} from '../../../../redux/actions/app'

const Thumbnail = ({ imgUrl, index }) => {
	const dispatch = useDispatch();
	const currentProduct = useSelector(state => state.app.currentProduct)

	const stateImage = useSelector(state => state.app.currentImage)

	const [currentImage, setCurrentImage] = useState(stateImage)

  // handle change main image
  const handleChangeImage = (e) => {
		const newActiveIndex = e.target.getAttribute("data-index");
		setCurrentImage(currentProduct.imgUrl[newActiveIndex].url)
		dispatch(changeImage(currentImage));
  };

	const [hover, setHover] = useState(false);
	
	// handle click hover
	const handleClick = () => {
		setHover(true);
	};

	// handle mouseOver hover
	const handleOver = () => {
		setHover(!hover);
	};

	// handle mouseOut hover
	const handleOut = () => {
		setHover(false);
	};

	// style CSS
	const styles = {
		height: '44px',
		width: '44px',
		border: '1px solid #bfbfbf',
		marginBottom: '10px'
	};
	const imageStyles = { width: '100%', height: '100%' };
	const isHoveredStyles = { border: '1px solid #263645', ...imageStyles };
	const noHoverStyles = { border: '0', ...imageStyles };
	return (
		<div style={styles}>
			<img
				src={imgUrl}
				style={hover ? isHoveredStyles : noHoverStyles}
				alt="#"
				onClick={(handleChangeImage, handleClick)}
				onMouseEnter={handleChangeImage}
				onMouseOver={handleOver}
				onMouseOut={handleOut}
				data-index={index}
			/>
		</div>
	);
};

export default Thumbnail;

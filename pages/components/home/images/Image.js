import React from 'react';

const Image = () => {

	return (
		<div style={ImageStyles}>
			<img
				src=''
				style={image}
				alt="product"
			/>
		</div>
	);
};

const ImageStyles = {
	maxWidth: '175px',
	marginTop: '25px',
	marginRight: '25px',
	position: 'relative'
};

const image = {
	width: '100%',
	height: '100%'
};

export default Image;

import React from 'react';
// import '../home.css';

const Image = ({ record }) => {

	return (
		<div style={ImageStyles}>
			<img
				src={record.url}
				style={image}
				alt="product"
			/>
			<div className="nameStyles">{record.name}</div>
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

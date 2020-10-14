import React from 'react';
// import '../home.css';

const Image = ({ record }) => {
	// css hover instead of this
	// const [hover, setHover] = useState(false);
	// const handleOver = () => {
	// 	setHover(true);
	// };
	// const handleOut = () => {
	// 	setHover(false);
	// };

	return (
		<div style={ImageStyles}>
			<img
				src={record.url}
				// onMouseOver={handleOver}
				// onMouseOut={handleOut}
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

import React, {} from 'react';
import { Row, Col } from 'antd';
// import 'antd/dist/antd.css';
import ActiveThumbnailWindow from './thumbnail-gallery/active-thumbnail-window';
import ThumbnailGrid from './thumbnail-gallery/thumbnail-grid';
import HarrysContent from './content/HarrysContent';

const HarrysGallery = () => {
	// const [hovered, setHovered] = useState(false);

	const renderThumbnail = () => { 
		return <ActiveThumbnailWindow />;
	};

	return (
		<Row style={HarrysContentStyles}>
			{/* left content */}
			<Col span={16} style={LeftStyles}>
				<ThumbnailGrid/>
				{renderThumbnail()}
			</Col>
			{/* right content */}
			<Col span={8}>
				<HarrysContent/>
			</Col>
		</Row>
	);
};
const HarrysContentStyles = {
	margin: '50px auto',
	maxWidth: '1024px'
};

const LeftStyles = {
	display: 'flex',
	height: '640px'
};

export default HarrysGallery;

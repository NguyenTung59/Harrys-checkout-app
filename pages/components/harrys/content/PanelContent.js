import React from 'react';
// import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import parse from "html-react-parser"
import { useSelector} from "react-redux";

const { Panel } = Collapse;

// onchange panel
const PanelContent = () => {
	const callback = key => {
		// console.log(key);
	};
	const currentProduct = useSelector(state => state.app.currentProduct)

	return (
		<Collapse defaultActiveKey={['1']} onChange={callback} style={panelStyles}>
			<Panel header="WHAT'S GOOD ABOUT IT" key="1" className="title">
				<div>
					{currentProduct.description ? parse(currentProduct.description) : null}
					
				</div>
			</Panel>
			<Panel header="LEARN MORE" key="2">
				<div>
					<ul>
						<li>
							<p>Includes 1 German-engineered blade cartridge.</p>
						</li>
						<li>
							<p>
								Our blades are designed for your face, and not recommended for
								head shaving.
							</p>
						</li>
					</ul>
					<div>
						<div>Have any other questions?</div>
						<div>
							Call <a href="/#">888 212 6855</a> or
							<span>
								Email <a href="/#">help@harrys.com</a>
							</span>
						</div>
					</div>
				</div>
			</Panel>
		</Collapse>
	);
};

const panelStyles = {
	border: 'none',
	textAlign: 'left'
};

export default PanelContent;

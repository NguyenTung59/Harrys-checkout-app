import React from 'react';
// import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const OptionForm = () => {
	const handleChange = value => {
		console.log(`selected ${value}`);
	};
	return (
		<div>
			<h1>Gel or Cream</h1>
			<Select
				defaultValue="lucy"
				style={{ width: 120 }}
				onChange={handleChange}
			>
				<Option value="jack">Jack</Option>
				<Option value="lucy">Lucy</Option>
				<Option value="Yiminghe">yiminghe</Option>
			</Select>
		</div>
	);
};

export default OptionForm;

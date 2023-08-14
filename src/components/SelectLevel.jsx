import React from "react";
import {Select, Space} from "antd";

function SelectLevel({setLevel}) {
	const {Option} = Select;
	function handleChange(value) {
		setLevel(value);
		console.log(`selected ${value}`);
	}

	return (
		<Space direction='vertical'>
			<Space wrap>
				<Select
					defaultValue='Beginner'
					style={{width: 200}}
					onChange={handleChange}
				>
					{/* Beginner Deck: 10 pairs */}
					<Option value={10}>Beginner</Option>
					{/* Beginner Deck: 20 pairs */}
					<Option value={20}>Intermediate</Option>
					{/* Beginner Deck: 52 pairs */}
					<Option value={52}>Expert</Option>
				</Select>
			</Space>
		</Space>
	);
}

export default SelectLevel;

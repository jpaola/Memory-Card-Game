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
					{/* Beginner Deck: 4 matches */}
					<Option value={4}>Beginner - 4 Pairs</Option>
					{/* Beginner Deck: 10 matches */}
					<Option value={10}>Novice - 10 Pairs</Option>
					{/* Beginner Deck: 20 matches */}
					<Option value={20}>Intermediate - 20 Pairs</Option>
					{/* Beginner Deck: 52 matches */}
					<Option value={52}>Expert - 52 Pairs</Option>
				</Select>
			</Space>
		</Space>
	);
}

export default SelectLevel;

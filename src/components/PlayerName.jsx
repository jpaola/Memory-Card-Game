import React from "react";
import {Form, Input, Button} from "antd";

function PlayerName({player1Name, player2Name, multiplayer, beginGame}) {
	function onFinish(values) {
		player1Name(values.player1name);
		console.log(values.player1name);
		if (multiplayer) {
			player2Name(values.player2name);
			console.log(values.player2name);
		}
		beginGame(true);
	}

	function onFinishFailed(errorInfo) {
		console.log("Failed:", errorInfo);
	}

	return (
		<Form
			name='basic'
			labelCol={{span: 8}}
			wrapperCol={{span: 16}}
			initialValues={{remember: true}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item
				label='Player 1 Name'
				name='player1name'
				rules={[
					{required: true, message: "Please input player 1 name!"},
				]}
				style={{color: "#ffffff"}}
			>
				<Input />
			</Form.Item>
			{multiplayer ? (
				<Form.Item
					label='Player 2 Name'
					name='player2name'
					rules={[
						{
							required: true,
							message: "Please input player 2 name!",
						},
					]}
					style={{color: "#ffffff"}}
				>
					<Input />
				</Form.Item>
			) : null}
			<Form.Item wrapperCol={{offset: 8, span: 16}}>
				<Button type='primary' htmlType='submit'>
					Start Game
				</Button>
			</Form.Item>
		</Form>
	);
}
export default PlayerName;

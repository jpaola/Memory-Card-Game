import React, {useState} from "react";
import {Button, Modal} from "antd";
import PlayerName from "./PlayerName";

function PlayerNameModal({player1Name, player2Name, multiplayer, beginGame}) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	console.log("multiplayer: ", multiplayer);
	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>

			<Modal
				title='Player Names'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<PlayerName
					player1Name={player1Name}
					player2Name={player2Name}
					multiplayer={multiplayer}
					beginGame={beginGame}
				/>
			</Modal>
		</>
	);
}
export default PlayerNameModal;

import React, { useState } from "react"
import { Button, Modal } from "antd"
import PlayerName from './PlayerName'

function StartMenu({ beginGame, player1Name, player2Name, multiplayer, numberOfPlayers }) {
    function handleChange(num) {
        showModal()
        numberOfPlayers(num)
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }


    return (
        <>
            <div style={{ width: "13rem" }}>
                <div style={{ display: "grid", padding: "20px 20px 20px 20px" }}>
                    <Button block onClick={() => handleChange(1)} style={{ width: "auto" }}>{"One Player"}</Button>
                </div>
                <div style={{ display: "grid", padding: "20px 20px 20px 20px" }}>
                    <Button block onClick={() => handleChange(2)} style={{ width: "auto" }}>{"Two Players"}</Button>
                </div>
            </div>
            <Modal title="Player Name" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                    <PlayerName player1Name={player1Name} player2Name= {player2Name} multiplayer={multiplayer} beginGame={beginGame}/>
            </Modal>
        </>
    )
}
export default StartMenu
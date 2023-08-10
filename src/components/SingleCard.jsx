import React from "react";
import {Image} from "antd";

function SingleCard({card, selectCard, reveal, disableCard}) {
	function revealCard() {
		// Only allow 2 selections per turn
		if (!disableCard) {
			selectCard(card);
		}
	}

	return (
		<div className='memory-card-game-single-card-container'>
			{reveal ? (
				<Image
					className='memory-game-card-front'
					preview={false} // disable preview
					src={require(`../images/deck/${card.card}.png`)}
				/>
			) : (
				<Image
					className='memory-game-card-back'
					onClick={revealCard}
					preview={false} // disable preview
					src={require("../images/deck/BK.png")}
				/>
			)}
		</div>
	);
}
export default SingleCard;

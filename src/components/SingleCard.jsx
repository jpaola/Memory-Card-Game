
import React from "react"

function SingleCard({ card, selectCard, reveal, disableCard }) {
    
    function revealCard() {
        // Only allow 2 selections per turn
        if (!disableCard) {
            selectCard(card)
        }
    }

    return (
        <div>
            {reveal ? <img alt="card-front" className="card-front" src={require(`../images/${card.card}.png`).default} /> : <img alt="card-back" className="card-back" onClick={revealCard} src={require("../images/BK.png").default} />}
        </div>
    )
}
export default SingleCard;
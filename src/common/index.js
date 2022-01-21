/*
    In this function we create a standard 52 card deck with 4 and 4 royals. suits and ranks 2-10 per suit.
*/
function getStandardDeck(level) {
    const standardDeck = []
    const suits = ["C", "D", "H", "S"] // Cloves, Diamonds, Hearts, Spades
    const royals = ["J", "Q", "K", "A"] // Jack, Queen, King, Ace
    for (let suit = 0; suit < 4; suit++) {
        // Add all ranks per suit except the royals
        for (let rank = 2; rank < 11; rank++) {
            standardDeck.push(`${rank}${suits[suit]}`)
        }
        // Add all royals per suit
        for (let royal = 0; royal < 4; royal++) {
            standardDeck.push(`${royals[royal]}${suits[suit]}`)
        }
    }

    /*
        Create a deck for specified level.
    */
    var deckByLevel = [];
    for (let i = 0; i < level; i++) {
        deckByLevel.push(standardDeck[i]);
    }

    return deckByLevel;
    // return standardDeck;
}

export function createDeck(level) {
    // fetch standard 52 card deck
    const deck = getStandardDeck(level)
    // duplicate and save the deck temporarily so we can then assign unique keys
    const dupeDeck = [...deck, ...deck]
    // now assign keys and add a match attribute to keep track of matched cards
    return dupeDeck.map((card, index) => {
        return {
            key: index,
            match: false,
            card
        }
    })
}

import {useEffect, useState} from "react";
import React from "react";
import {Button, Typography} from "antd";
import {createDeck} from "../common";
import SingleCard from "./SingleCard";
import SelectLevel from "./SelectLevel";
import StartMenu from "./StartMenu";

function MemoryGame() {
	/**
	 * NOTE: Multiplayer can be updated into a dynamic array, but since no
	 * more than 2 players is ideal for this game, it's not necessary.
	 */
	const [deck, setDeck] = useState([]);
	const [firstChoice, setFirstChoice] = useState(null);
	const [secondChoice, setSecondChoice] = useState(null);
	// const [singlePlayer, setSinglePlayer] = useState(false);
	const [twoPlayer, setTwoPlayer] = useState(false);
	const [showPlayerPrompt, setShowPlayerPrompt] = useState(true);
	const [player1Score, setPlayer1Score] = useState(0);
	const [player2Score, setPlayer2Score] = useState(0);
	const [totalMatches, setTotalMatches] = useState(0);
	const [disableCard, setDisableCard] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState(1);
	const [level, setLevel] = useState(4);
	const [winner, setWinner] = useState("");
	const [gameOver, setGameOver] = useState(false);
	const [player1Name, setPlayer1Name] = useState("Player 1");
	const [player2Name, setPlayer2Name] = useState("Player 2");

	//Antd requirements
	const {Title} = Typography;

	/* 
     - Handle all changes to first and second choice.
     - Handle turns.
     - Handle matching logic.
  */
	useEffect(() => {
		/*
    Check if the cards match only when the player has made his/her first and second selections.
    */
		if (firstChoice && secondChoice) {
			setDisableCard(true); // allow player to only select 2 cards
			// let's check for matching cards
			if (firstChoice.card === secondChoice.card) {
				console.log(
					"cards: ",
					firstChoice.card,
					" and ",
					secondChoice.card,
					" match!"
				);

				// ...and update the match state for these cards on the deck
				setDeck((previousCards) => {
					return previousCards.map((card) => {
						if (card.card === firstChoice.card) {
							return {...card, match: true};
						} else {
							return card;
						}
					});
				});

				updateScore();
				// Wait 3 seconds before flipping unmatched cards face down
				setTimeout(() => {
					endTurn();
				}, 2000);
			} else {
				console.log(
					"cards: ",
					firstChoice.card,
					" and ",
					secondChoice.card,
					" DO NOT match!"
				);
				// Wait 2 seconds before flipping unmatched cards face down
				if (twoPlayer) {
					if (currentPlayer === 1) setCurrentPlayer(2);
					else setCurrentPlayer(1);
				}
				setTimeout(() => {
					endTurn();
				}, 2000);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstChoice, secondChoice]);

	/*
    Handle selection per turn. Only 2 selections allowed.
  */
	function selectCard(card) {
		firstChoice ? setSecondChoice(card) : setFirstChoice(card);
	}

	/*
    Keep track of player scores and total matches. Total matches is the total count of cards in the deck divided by 2 since we have duplicates.
  */
	function updateScore() {
		setTotalMatches(totalMatches + 1);
		if (twoPlayer) {
			if (currentPlayer === 1) setPlayer1Score(player1Score + 1);
			else if (currentPlayer === 2) setPlayer2Score(player2Score + 1);
		} else {
			setPlayer1Score(player1Score + 1);
		}

		/*
      Once the game is over or matches equal player level announce winner
    */
		if (totalMatches + 1 === level) {
			setGameOver(true);
			if (player1Score > player2Score) {
				// setWinner("Player 1 won!")
				setWinner(`${player1Name} won!`);
			} else if (player2Score > player1Score) {
				setWinner(`${player2Name} won!`);
			} else {
				setWinner("It's a tie!");
			}
		}
	}

	/*
    Clear out both choices once a player's turn ends.
  */
	function endTurn() {
		setFirstChoice(null);
		setSecondChoice(null);
		setDisableCard(false);
	}

	/*
    Create a new deck out of the standard deck by using the spread operator to add it twice in order to get the duplicate cards.
  */
	function getShuffledDeck() {
		const shuffledDeck = [...createDeck(level)];
		// Shuffle the deck using Fisher-Yates algorithm
		for (let i = shuffledDeck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = shuffledDeck[i];
			shuffledDeck[i] = shuffledDeck[j];
			shuffledDeck[j] = temp;
		}
		// Update the deck with the shuffled version
		setDeck(shuffledDeck);
	}

	/*
    Determine number of players and start game.
  */
	function beginGame(value) {
		if (value) {
			getShuffledDeck();
			setShowPlayerPrompt(false);
		}
	}

	/* 
    Set's the name of either single player or first player when in mutiplayer mode.
  */
	function setP1Name(name) {
		console.log("name in setP1Name(): ", name);
		setPlayer1Name(name);
	}

	/*
    Set the name for the second player in multiplayer mode.
  */
	function setP2Name(name) {
		console.log("name in setP2Name(): ", name);
		setPlayer2Name(name);
	}

	/*
    Select number of players.
  */
	function selectNumberOfPlayers(playerOption) {
		if (playerOption === 1) {
			// setSinglePlayer(true);
			setTwoPlayer(false);
			console.log("Beginning 1 player game");
		}
		if (playerOption === 2) {
			// setSinglePlayer(false);
			setTwoPlayer(true);
			console.log("Beginning 2 player game");
		}
	}

	return (
		<>
			<section className='layout memory-card-game-container'>
				<Title id='memory-card-game-title'>{"Memory Game"}</Title>

				{/* Announce Winner when the game is over */}
				{gameOver ? (
					<Title style={{color: "#FF0000"}}>{`${winner}`}</Title>
				) : null}

				{/*-------------------------------------------------------*/}
				{/* Hide prompt once player/s have chosen 1 or 2 player/s and level */}
				{/*-------------------------------------------------------*/}
				{showPlayerPrompt ? (
					<>
						{/* Select level otherwise default level is Beginner (4 -matches)*/}
						<SelectLevel setLevel={setLevel} />
						<p></p>
						<StartMenu
							numberOfPlayers={selectNumberOfPlayers}
							player1Name={setP1Name}
							player2Name={setP2Name}
							multiplayer={twoPlayer}
							beginGame={beginGame}
						/>
					</>
				) : null}

				{/*-------------------------------------------------------*/}
				{/* Display score once the player/s have chosen number of players */}
				{/*-------------------------------------------------------*/}
				{!showPlayerPrompt ? (
					<div className='memory-game-in-game-header'>
						<div className='memory-game-ingame-menu'>
							<Button type='primary' block onClick={beginGame}>
								New Game
							</Button>
						</div>
						<div className='memory-game-heading'>
							<div className='memory-game-subheading'>{`Matches: ${totalMatches} / ${deck.length /
								2}`}</div>

							<div className='memory-game-subheading'>
								{`${player1Name}'s Score: ${player1Score}`}
								{twoPlayer
									? `${player2Name}'s Score: ${player2Score}`
									: null}
							</div>

							<div className='memory-game-subheading'>
								{`${
									currentPlayer === 1
										? player1Name
										: player2Name
								}'s turn`}
							</div>
						</div>
					</div>
				) : null}

				{/*--------------------*/}
				{/* Load deck of cards */}
				{/*--------------------*/}
				<div className='memory-game-card-grid'>
					{deck.map((card) => (
						<div
							className='memory-game-card'
							key={card.key}
							data-testid={card.key}
						>
							<SingleCard
								key={card.key}
								card={card}
								selectCard={selectCard}
								reveal={
									card === firstChoice ||
									card === secondChoice ||
									card.match
								}
								disableCard={disableCard}
							/>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default MemoryGame;

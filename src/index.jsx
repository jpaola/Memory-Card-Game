import React from "react";
import ReactDOM from "react-dom";
import MemoryGame from "./components/MemoryGame";
import "./styles/index.scss";
import "antd/dist/antd.css";
import {initializeApp} from "firebase/app";

initializeApp({
	apiKey: "AIzaSyD7EjSE_gijEHbS28CtMhBJr1wZ4xbg0nU",
	authDomain: "memory-card-game-336b0.firebaseapp.com",
	projectId: "memory-card-game-336b0",
	storageBucket: "memory-card-game-336b0.appspot.com",
	messagingSenderId: "686260334968",
	appId: "1:686260334968:web:457627c8c1bf3212ba588d",
	measurementId: "G-3L033XTQB3",
});

ReactDOM.render(<MemoryGame />, document.getElementById("root"));

import React from "react";
import firebase from "firebase/app";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import AppLayout from "./components/AppLayout";

firebase.initializeApp({
	apiKey: "AIzaSyD7EjSE_gijEHbS28CtMhBJr1wZ4xbg0nU",
	authDomain: "memory-card-game-336b0.firebaseapp.com",
	projectId: "memory-card-game-336b0",
	storageBucket: "memory-card-game-336b0.appspot.com",
	messagingSenderId: "686260334968",
	appId: "1:686260334968:web:457627c8c1bf3212ba588d",
	measurementId: "G-3L033XTQB3",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AppLayout />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

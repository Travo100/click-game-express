import React from "react";
import "./Header.css";

const Header = props => (
  <header>
    <h1>Welcome to the chihuahua game!</h1>
    <h3>Chihuahua Matches: <span id="win">{props.winCount}</span></h3>
    <h3>Chihuahua Guesses: <span id="guess">{props.guessCount}</span></h3>
    <p>In this game you pick a chihuahua, hopefully they pick you too to be their owner!</p>
  </header>
);

export default Header;

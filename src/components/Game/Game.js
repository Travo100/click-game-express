import React, {Component} from "react";
import Header from "./../Header";
import Footer from "./../Footer";
import Card from "./../Card";
import "./Game.css";

import cards from "./../../cards.json"

class Game extends Component {
    state = {
        chihuahuas : cards,
        randomChihuahuaId: 0,
        winCount: 0,
        guessCount: 0
    }

    componentDidMount() {
        // once our component mounts get a random id from the cards 
        // using the getRandomCardId method of the class
        this.setState({randomChihuahuaId: this.getRandomCardId(this.state.chihuahuas) });
    }

    // pickedChihuahua is the core logic of our game here 
    pickedChihuahua = (chihuahua) => {
        // if the randomChihuahuaId matches the id that is selected 
        if(this.state.randomChihuahuaId === chihuahua.id) {
            // play the woof mp3
            const woof = new Audio("assets/audio/woof.mp3");
            woof.play();
            // also update the state to get a new 
            // randomChihuahuaId and up the winCount by 1
            this.setState({
                randomChihuahuaId: this.getRandomCardId(this.state.chihuahuas), 
                winCount: this.state.winCount + 1
            });
        } else { 
            // if thet don't pick the right chihuahua 
            // up the guessCount by 1
            this.setState({
                guessCount: this.state.guessCount + 1
            });
        }
        
    }

    // a helper method that gets a 
    // random card id for us every time we call it 
    getRandomCardId = (cards) => Math.floor(Math.random() * cards.length) + 1;


    render() {
        return (
            <div className="container">
                <Header winCount={this.state.winCount} guessCount={this.state.guessCount} />
                    <div className="card-container">
                        {this.state.chihuahuas.map(chihuahua => 
                        <Card
                                key = {chihuahua.id}
                                id = {chihuahua.id}
                                image = {chihuahua.image}
                                name = {chihuahua.name}
                                pickedChihuahua = {this.pickedChihuahua}
                        />
                        )}
                    </div>
                <Footer />
            </div>
        )
    }
}

export default Game;
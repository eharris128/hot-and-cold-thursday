import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

// To Have in state:
    // Make your guess!, cold, hot, kinda hot, (You Won. Click new game to play again.)

// Add interactvity

// Add randomizer function for computer answer on game.js
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            computerAnswer: Math.floor((Math.random() * 100) + 1),
            input: 0,
            mostRecentGuess: 25,
            guesses: [10,15],
            feedback: "Make your guess!"
        }
    }
    
    onSubmit(e) {
        e.preventDefault();
        // console.log('doasfkjdasfl')
        // console.log("value " + this.input.value);
        // console.log("e " + e.target.value);
        // this.onSubmit({e});
        // this.state.guesses.push({this.state.input});
        // ...this.state.guesses, input
    }

    render() {
        // Input: GuessSection > Guess-form
        // Mostrecentguess: GuessList
        // Guesses: start as empty array, push mostRecentGuess into it. GuessList
        
        return (
                <div>
                    <Header />
                    <GuessSection onChange={input => this.setState({input})} onSubmit={this.onSubmit} feedback={this.state.feedback} />
                    <GuessCount count={this.state.guesses.length} />
                    <GuessList guesses={this.state.guesses} />
                </div>
            );
    }
}

// TO DO: 

// 1. Add onChange in guess-form.js to the input.
// 2. Console.log('current state input value' + this.state.input);
// 3. Alter onSubmit function in game.js to update state, and then render the page 
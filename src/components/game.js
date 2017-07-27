import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

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
        console.log('onSubmit active');
        e.preventDefault();


  /*
        // feedback
        if (comps value and user value)
        cold >= 50
        feedback = 'Cold'
        kinda hot >= 30
        feedback = 'Kinda Hot'
        hot >= 10
        feedback = 'Hot'
        else "you win"
        
*/



        this.setState({
            guesses: [...this.state.guesses, this.state.input]
        })



        // [X] Grab value
        // [X] Add value into state
        // [ ] Display feedback                
        // [ ] Set State

    }

    render() {
        // Input: GuessSection > Guess-form
        // Mostrecentguess: GuessList
        // Guesses: start as empty array, push mostRecentGuess into it. GuessList
        console.log('current state input value ' + this.state.input);
        console.log('guessess in state: ', this.state.guesses)
        return (
                <div>
                    <Header />
                    <GuessSection onChange={input => this.setState({input})} onSubmit={(e) => this.onSubmit(e)} feedback={this.state.feedback} />
                    <GuessCount count={this.state.guesses.length} />
                    <GuessList guesses={this.state.guesses} />
                </div>
            );
    }
}

// TO DO: 

// 1. [X] Add onChange in guess-form.js to the input.
// 2. [X] Console.log('current state input value' + this.state.input);
// 3. [ ] Alter onSubmit function in game.js to update state, and then render the page 
// 4. [ ] Only accept number values
// 5. [ ] Make your guess!, cold, hot, kinda hot, (You Won. Click new game to play again.)

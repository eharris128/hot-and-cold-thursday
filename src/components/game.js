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
            guesses: [],
            feedback: "Make your guess!",
            modalClosed: true
        }
    }
    
    onSubmit(e) {
        e.preventDefault();

        // Input validation
        if (this.state.guesses.includes(this.state.input)) {
            alert('You guessed this number already');
            return null;
        }

        if (isNaN(this.state.input)) {
            alert('Please input a number');
            return null;
        }

        let difference = Math.abs(this.state.computerAnswer-this.state.input);
        let feedbackMessage; 
        
        if (difference >= 50){
            feedbackMessage = 'Cold';
        } else if (difference >= 30) {
            feedbackMessage = 'Kinda hot';
        } else if (difference >= 10) {
            feedbackMessage = 'Hot';
        } else if (difference >= 1) {
            feedbackMessage = 'Super hot';
        } else if (difference === 0) {
            feedbackMessage = 'You win!!';
        } else {
            feedbackMessage = 'Something went wrong';
        }
    
        this.setState({
            feedback: feedbackMessage,
            guesses: [...this.state.guesses, this.state.input]
        })
    }

    onClick() {
        this.setState({
            computerAnswer: Math.floor((Math.random() * 100) + 1),
            input: 0,
            guesses: [],
            feedback: "Make your guess!",
            modalClosed: true
        })
    }

    handleModal() {
        this.setState({
            modalClosed: !(this.state.modalClosed)
        })
    }

    render() {
        return (
                <div>
                    <Header modalClosed={this.state.modalClosed} handleModal={() => this.handleModal()} onClick={() => this.onClick()}/>
                    <GuessSection onChange={input => this.setState({input})} onSubmit={(e) => this.onSubmit(e)} feedback={this.state.feedback} />
                    <GuessCount count={this.state.guesses.length} />
                    <GuessList guesses={this.state.guesses} />
                </div>
            );
    }
}

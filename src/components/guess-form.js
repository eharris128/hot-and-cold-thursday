import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {

    // onSubmit(e) {
    //     e.preventDefault();
    //        console.log("value: " + this.input.value)
    //      }

    return (
    
        <form onSubmit={e => e.preventDefault()}>

            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};


        // <form onSubmit={props.onSubmit}>
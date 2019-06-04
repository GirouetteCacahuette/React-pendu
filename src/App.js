import React, { Component } from 'react';
import './App.css';

import BoardKey from './BoardKey';

var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class App extends Component {
    state = {
        boardKeys: this.generateKeys(),
        clickedBoardKeys: []
    };

    generateKeys() {
        var alphabet = ALPHABET.split('').reverse();
        const result = [];
        while (result.length < ALPHABET.length) {
            const boardKey = alphabet.pop();
            result.push(boardKey);
        }
        return result;
    }

    // Arrow fx for binding
    handleBoardKeyClick = index => {
        const { clickedBoardKeys } = this.state;
        this.setState({ clickedBoardKeys: [...clickedBoardKeys, index] });
    };

    render() {
        const { boardKeys, clickedBoardKeys } = this.state;
        return (
            <div className="pendu">
                {boardKeys.map((boardKey, index) => (
                    <BoardKey
                        key={index}
                        boardKey={boardKey}
                        feedback={clickedBoardKeys.includes(index) ? 'clicked' : 'unclicked'}
                        index={index}
                        onClick={this.handleBoardKeyClick}
                    />
                ))}
            </div>
        );
    }
}

export default App;

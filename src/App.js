import React, { Component } from 'react';
import './App.css';

import BoardKey from './BoardKey';

var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class App extends Component {
    state = {
        boardKeys: this.generateKeys()
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
    handleBoardKeyClick = boardKey => {
        console.log(boardKey + ' clicked');
    };

    render() {
        const { boardKeys } = this.state;
        return (
            <div className="pendu">
                {boardKeys.map((boardKey, index) => (
                    <BoardKey key={index} boardKey={boardKey} feedback="unclicked" onClick={this.handleBoardKeyClick} />
                ))}
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from 'lodash.shuffle';
import './App.css';

import BoardKey from './BoardKey';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const WORDS = ['RADIS', 'CITRON', 'ECHALOTE', 'AMANDE', 'CHAMPIGNON', 'BANANE'];

const MysteryLetter = ({ letter, feedback }) => (
    <div className={`letter ${feedback}`}>
        <span className="letter">{feedback === 'discovered' ? letter : '_'}</span>
    </div>
);

MysteryLetter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(['discovered', 'undiscovered'])
};

class App extends Component {
    state = {
        boardKeys: this.generateKeys(),
        clickedBoardKeys: [],
        mysteryWord: this.generateMysteryWord()
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

    generateMysteryWord() {
        const mysteryWord = shuffle(WORDS)[0];
        return mysteryWord.split('');
    }

    // Arrow fx for binding
    handleBoardKeyClick = boardKey => {
        const { clickedBoardKeys } = this.state;
        this.setState({ clickedBoardKeys: [...clickedBoardKeys, boardKey] });
    };

    render() {
        const { boardKeys, clickedBoardKeys, mysteryWord } = this.state;
        return (
            <div className="pendu">
                <div className="mysteryWord">
                    {mysteryWord.map(letter => (
                        <MysteryLetter
                            letter={letter}
                            feedback={clickedBoardKeys.includes(letter) ? 'discovered' : 'undiscovered'}
                        />
                    ))}
                </div>
                <div className="keyBoard">
                    {boardKeys.map((boardKey, index) => (
                        <BoardKey
                            key={index}
                            boardKey={boardKey}
                            feedback={clickedBoardKeys.includes(boardKey) ? 'clicked' : 'unclicked'}
                            index={index}
                            onClick={clickedBoardKeys.includes(boardKey) ? () => void 0 : this.handleBoardKeyClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;

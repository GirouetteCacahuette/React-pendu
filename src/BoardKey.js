import React from 'react';

import './BoardKey.css';

const BoardKey = ({ boardKey, feedback, onClick }) => (
    <div className={`key ${feedback}`} onClick={() => onClick(boardKey)}>
        <span className="key">{boardKey}</span>
    </div>
);

export default BoardKey;

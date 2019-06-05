import React from 'react';
import PropTypes from 'prop-types';

import './BoardKey.css';

const BoardKey = ({ boardKey, feedback, onClick }) => (
    <div className={`key ${feedback}`} onClick={() => onClick(boardKey)}>
        <span className="key">{boardKey}</span>
    </div>
);

BoardKey.propTypes = {
    boardKey: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(['clicked', 'unclicked']),
    onClick: PropTypes.func.isRequired
};

export default BoardKey;

import React from 'react';
import PropTypes from 'prop-types';

import './BoardKey.css';

const BoardKey = ({ boardKey, feedback, index, onClick }) => (
    <div className={`key ${feedback}`} onClick={() => onClick(index)}>
        <span className="key">{boardKey}</span>
    </div>
);

BoardKey.propTypes = {
    boardKey: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf(['clicked', 'unclicked']),
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default BoardKey;

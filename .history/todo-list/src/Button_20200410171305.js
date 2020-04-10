import React from 'react';

const button = ({ children, clickHandler }) =>
    <div>
        <button className="button" onClick={clickHandler}>{children}</button>
    </div>

export default button;
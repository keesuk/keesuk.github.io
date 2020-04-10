import React from 'react';

const Button = ({ children, clickHandler }) =>
    <div>
        <button className="Button" onClick={clickHandler}>{children}</button>
    </div>

export default Button;
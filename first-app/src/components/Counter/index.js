import React, { useState } from "react";
import './index.css';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const countPlusOne = () => {
        setCount(count + 1);
    }

    const countMinusOne = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter_wrapper">
            <h2 className="counter_header">Counter</h2>
            <label className='counter_label'>
                {count}
            </label>
            <button className='counter_button plus' onClick={countPlusOne}>+</button>
            <button className='counter_button minus' onClick={countMinusOne}>-</button>
        </div>
    )
}

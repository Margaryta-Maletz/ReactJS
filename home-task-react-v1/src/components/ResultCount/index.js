import React from 'react';
import './index.css';

export const ResultCount = (props) => {
    return (
        <>
            <label className='results-count_label'>
                <strong className='results-count_label_bold'>{ props.count }</strong> movies found
            </label>
        </>
    )
}

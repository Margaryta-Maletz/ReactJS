import React from 'react';

export const ResultCount = (props) => {
    return (
        <>
            {props.children}
            <label className='results-count_label'>
                movies found
            </label>
        </>
    )
}

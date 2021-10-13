import React from 'react';
import './ResultCount.css';

type ResultCountProp = {
    count: string,
}

export const ResultCount: React.FC<ResultCountProp> = ({ count }) => {
    return (
        <>
            <label className='results-count_label'>
                <strong className='results-count_label_bold'>{ count }</strong> movies found
            </label>
        </>
    )
}

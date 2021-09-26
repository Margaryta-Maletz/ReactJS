import React from 'react';

export const ResultsSort = (props) => {
    return (
        <>
            <label className='results-sort_header'>
                Find your movie
                <select className='results-sort_list'>
                    {props.sort.map((item, index) =>
                        index ? <option className='result-sort-item'>{ item }</option>
                            : <option selected className='result-sort-item'>{ item }</option>
                    )}
                </select>
            </label>
        </>
    )
}

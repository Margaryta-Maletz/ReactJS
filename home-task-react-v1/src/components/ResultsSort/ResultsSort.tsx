import React from 'react';
import './ResultsSort.css';

type ResultsSortProp = {
    sortList: string[],
}

export const ResultsSort: React.FC<ResultsSortProp> = ({ sortList= ['title'] }) => {
    return (
        <>
            <label className='results-sort_header'>
                sort by
                <select className='results-sort_list'>
                    {sortList.map((item: string, index: number) =>
                        index ? <option key={index.toString()} value={index.toString()} className='result-sort-item'>{ item }</option>
                            : <option key={index.toString()} defaultValue={index.toString()} className='result-sort-item'>{ item }</option>
                    )}
                </select>
            </label>
        </>
    )
}

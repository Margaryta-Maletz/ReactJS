import React from 'react';
import './ResultsSort.css';

type ResultsSortProp = {
    sortList: string[],
}

export const ResultsSort: React.FC<ResultsSortProp> = ({ sortList= [] }) => {
    return (
        <>
            <label className='results-sort_header'>
                sort by
                <select className='results-sort_list'>
                    {sortList.map((item: string, index: number) =>
                        index ? <option className='result-sort-item'>{ item }</option>
                            : <option selected className='result-sort-item'>{ item }</option>
                    )}
                </select>
            </label>
        </>
    )
}

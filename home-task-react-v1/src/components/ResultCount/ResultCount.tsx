import React from 'react';
import styles from './ResultCount.module.css';

type ResultCountProp = {
    count: string,
}

export const ResultCount: React.FC<ResultCountProp> = ({ count }) => {
    return (
        <>
            <label className={styles.label}>
                <strong className={styles.labelBold}>{ count }</strong> movies found
            </label>
        </>
    )
}

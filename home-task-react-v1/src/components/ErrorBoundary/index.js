import React from 'react';
import './index.css';

const ErrorBoundary = (props) => {
    const OopsText = () => (
        <h2 className='oops-text'>
            Oops, something went wrong... We are doing our best to fix the issue
        </h2>
    )

    const isEverythinkOk = true;
    return (
        <>
            { isEverythinkOk ? props.children : <OopsText /> }
        </>
    )
}

export default ErrorBoundary;

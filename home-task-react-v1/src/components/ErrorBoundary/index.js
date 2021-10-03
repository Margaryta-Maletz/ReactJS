import React from 'react';
import './index.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error', error.toString());
        console.log('Info', errorInfo.componentStack);
    }

    render() {
        if (this.state.hasError) {
            // Error path
            return (
                <div>
                    <h2>Oops, something went wrong... We are doing our best to fix the issue</h2>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;

import React from 'react';

const ResultDisplay = ({ result }) => {
    return (
        <div className='result'>
            <h2>Результат:</h2>
            {result.status === 'success' ? (
                <pre>{result.output}</pre>
            ) : (
                <pre style={{ color: 'red' }}>{result.error}</pre>
            )}
        </div>
    );
};

export default ResultDisplay;
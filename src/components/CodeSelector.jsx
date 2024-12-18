import React from 'react';

const CodeSelector = ({ language, setLanguage }) => {
    return (
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
        </select>
    );
};

export default CodeSelector;
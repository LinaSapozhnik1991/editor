import React from 'react';
import MonacoEditor from '@monaco-editor/react';



const CodeEditorComponent = ({ language, code, setCode }) => {
 

    return (
        <MonacoEditor
            height="50vh"
            language={language}
            value={code}
            onChange={(value) => setCode(value)}
            options={{ selectOnLineNumbers: true,
                automaticLayout: true,
                ref:true,
                minimap: { enabled: true },
                theme:'vs-dark'
            }}
        />
    );
};

export default CodeEditorComponent;
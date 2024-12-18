import React, { useState } from 'react';
import { mockApi } from '../mocks/mockApi';
import CodeSelector from './CodeSelector';
import CodeEditorComponent from './CodeEditorComponent';
import ResultDisplay from './ResultDisplay';

const CodeEditor = () => {
    const [code, setCode] = useState('// Напишите ваш код здесь...');
    const [language, setLanguage] = useState('python');
    const [result, setResult] = useState(null);

    const handleRun = async () => {
        try {
            const response = await mockApi('http://localhost:4000/api/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: code,
                    language: language,
                }),
            });

            if (response.status === 'success') {
                setResult({ status: 'success', output: response.data.output });
            } else {
                setResult({ error: 'Ошибка выполнения кода.' });
            }

        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error.message);
            setResult({ error: error.message });
        }
    };

    return (
        <div className='Editor'>
            <h1>Онлайн редактор кода</h1>
            <p><span>Введите ваш код в редакторе и выберите язык программирования.</span></p>
            <CodeSelector language={language} setLanguage={setLanguage} />
     
            <CodeEditorComponent language={language} code={code} setCode={setCode} />
            <button onClick={handleRun}>Run</button>
            {result && <ResultDisplay result={result} />}
        </div>
    );
};

export default CodeEditor;
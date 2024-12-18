import React from 'react';
import CodeEditor from './components/CodeEditor';
import Tasks from './components/Tasks'

import './App.css'

function App() {
  return (
    <div className="App">
      <Tasks/>
      <CodeEditor />
    </div>
  );
}

export default App;
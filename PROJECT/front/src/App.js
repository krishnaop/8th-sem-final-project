import React, { useState, useEffect } from 'react';
import './App.css';

import MyComponent from './aiect.js'
import Cocubes from './cocubes';
function App() {
  const [model, setModel] = useState(false);

  useEffect(() => { }, [model])
  return (
    <div className="App">
      {model === true ? <Cocubes setModel={setModel} /> : <MyComponent setModel={setModel} />}
    </div>
  );
}

export default App;

import { useState } from 'react'
import React from 'react';
import Programming from './views/Programming/Programming.jsx';
import './index.css'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Programming/>
    </div>
  );
}

export default App;

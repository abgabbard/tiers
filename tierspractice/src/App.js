import React, { useState, useEffect } from 'react';
import './App.css';
import API from './utils/API';

function App() {

const [characters, setCharacters] = useState([]); 
  useEffect(() => {
    API.search().then(result => {
      console.log(result.data.data.results)
    })
  }, [])
  return (
    <div>

    </ div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import API from './utils/API';

function App() {

const [characters, setCharacters] = useState([]); 
  useEffect(() => {
    API.search().then(myResults => {
     setCharacters(myResults.data.data.results.map( character => {
       return {
        id: character.id, 
        name: character.name,
        image: character.thumbnail.path + '.' + character.thumbnail.extension
       }
     }))
    })
  }, [])
  console.log("characters:", characters)
  return (
    <div>
        { characters.map(c => <div>{c.name}</div>)}
    </ div>
  );
}

export default App;

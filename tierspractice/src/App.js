import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import API from './utils/API';

function App() {

const [characters, setCharacters] = useState([]); 
  useEffect(() => {
    API.search().then(myResults => {
     setCharacters(myResults.data.data.results
      .map( character => {
       return {
        id: character.id, 
        name: character.name,
        image: character.thumbnail.path + '.' + character.thumbnail.extension
       }
     })
     .sort((a,b) => b.name.localeCompare(a.name))
     )
    })
  }, [])
  console.log("characters:", characters)
  return (
    <div>
        { characters.map(c => <Character name={c.name} id={c.id} image={c.image}/>)}
    </ div>
  );
}

export default App;

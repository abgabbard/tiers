import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import API from "./utils/API";

function App() {
  const [characters, setCharacters] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [sortName, setSortName] = useState('name');

  useEffect(() => {
    API.search().then((myResults) => {
      setCharacters(
        myResults.data.data.results
          .map((character) => {
            return {
              id: character.id,
              name: character.name,
              image:
                character.thumbnail.path + "." + character.thumbnail.extension,
            };
          })
          .sort((a, b) => b.name.localeCompare(a.name))
      );
    });
  }, []);
  const handlesort = () => {
    setSortAscending(!sortAscending);
  };
  console.log("characters:", characters);
  return (
    <div>
      <button onClick={handlesort}>Toggle Sort</button>
      {characters
        .sort((a, b) => {
          if (sortAscending) {
            return a[sortName].localeCompare(b[sortName])
          } else {
            return b[sortName].localeCompare(a[sortName]);
          }
        })
        .map((c) => (
          <Character name={c.name} id={c.id} image={c.image} />
        ))}
    </div>
  );
}

export default App;

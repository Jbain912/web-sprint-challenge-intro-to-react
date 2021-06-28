import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './character.js'


const App = () => {
 

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((data) => {
      setCharacterList(data.data);
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <h1 className="Header">War of The Stars</h1>
      <CharacterCard props={characterList} />
    </div>
  );

};


export default App;

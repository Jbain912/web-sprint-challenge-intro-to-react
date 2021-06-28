import { CharacterSheet, CharacterSheet2 } from './Styles.js';



function CharacterCard (props) {
  const characterData = props.props;

  return (
    <CharacterSheet>
      {characterData.map(files => {
        return (
          <CharacterSheet2>

            <p><h1>{files.name}</h1> Born: {files.birth_year}.</p>
            <p>Gender: {files.gender}</p>
            <p>Height: {files.height}cm</p>
            <p>Weight: {files.mass}kg</p>
            <p>Movies appeared in: <br />
            {files.films.map(files =>
            <div>{files}</div>)}</p>
            
          </CharacterSheet2>
        );
      })}
    </CharacterSheet>
    
  );
}

export default CharacterCard;
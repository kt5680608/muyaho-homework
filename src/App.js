import { useState, useEffect } from "react";
import { Card } from "./components";
import { data } from "./data/data-form";
function App() {
  const newData = data;
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState();
  const [array, setArray] = useState(Object.keys(localStorage));
  useEffect(() => {}, [array]);
  const addCharacter = () => {
    newData.name = characterName;
    localStorage.setItem(characterName, JSON.stringify(newData));
  };
  return (
    <div>
      {array.map((item) => {
        return <Card item={item} />;
      })}
      <input
        type="text"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (characterName !== "") {
            addCharacter();
            setCharacterData(JSON.parse(localStorage.getItem(characterName)));
            setCharacterName("");
            setArray([...array, characterName]);
          } else {
            localStorage.clear();
          }
        }}
      >
        submit
      </button>
    </div>
  );
}

export default App;

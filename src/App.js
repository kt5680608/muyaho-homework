import { useState, useEffect } from "react";
import { Card } from "./components";
import { dataForm } from "./data/data-form";
import {
  GridContainer,
  Input,
  MainContainer,
  Button,
  SubmitContainer,
  TitleContainer,
  MainTitle,
} from "./global-styles";
import { AnimatePresence } from "framer-motion";
function App() {
  const newData = dataForm;
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState();
  const [array, setArray] = useState(Object.keys(localStorage));
  useEffect(() => {
    setArray(Object.keys(localStorage));
  }, [Object.keys(localStorage).length]);
  const addCharacter = () => {
    newData.name = characterName;
    localStorage.setItem(characterName, JSON.stringify(newData));
  };
  return (
    <MainContainer>
      <AnimatePresence>
        <TitleContainer>
          <MainTitle>Muyaho의 숙제검사기</MainTitle>
        </TitleContainer>
        <GridContainer>
          {array.map((item) => {
            return <Card item={item} />;
          })}
          <SubmitContainer
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          >
            <Input
              placeholder="캐릭터명"
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
            <Button
              onClick={() => {
                if (characterName !== "") {
                  addCharacter();
                  setCharacterData(
                    JSON.parse(localStorage.getItem(characterName))
                  );
                  setCharacterName("");
                  setArray([...array, characterName]);
                } else {
                  localStorage.clear();
                }
              }}
            >
              등록
            </Button>
          </SubmitContainer>
        </GridContainer>
      </AnimatePresence>
    </MainContainer>
  );
}

export default App;

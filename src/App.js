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
  CardKeyContainer,
  InputForm,
} from "./global-styles";
function App() {
  const newData = dataForm;
  const [characterName, setCharacterName] = useState("");
  const [characterLevel, setCharacterLevel] = useState();
  const [array, setArray] = useState(Object.keys(localStorage).sort());
  const [_, setSortedArray] = useState(
    array.map((item) => {
      const orderValue = JSON.parse(localStorage.getItem(item))?.order;
      return orderValue;
    })
  );
  useEffect(() => {
    setArray(Object.keys(localStorage).sort());
    setSortedArray(
      array.map((item) => {
        const orderValue = JSON.parse(localStorage.getItem(item))?.order;
        return orderValue;
      })
    );
  }, [Object.keys(localStorage).length]);
  const addCharacter = () => {
    newData.name = characterName;
    if (typeof characterLevel !== Number) {
      newData.level = 0;
    } else {
      newData.level = characterLevel;
    }
    newData.order = Object.keys(localStorage).length;
    localStorage.setItem(characterName, JSON.stringify(newData));
  };
  const initializeCharacterInfo = () => {
    setCharacterName("");
    setCharacterLevel(0);
  };
  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Muyaho의 숙제검사기</MainTitle>
      </TitleContainer>
      <GridContainer>
        {array.map((item, index) => {
          const itemArray = JSON.parse(localStorage.getItem(item));
          return (
            <CardKeyContainer key={itemArray.order}>
              <Card
                item={item}
                delay={0.1 * index}
                arrayLength={array.length}
              />
            </CardKeyContainer>
          );
        })}
        <SubmitContainer
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.1 * (array.length + 1) },
          }}
        >
          <InputForm>
            <Input
              placeholder="캐릭터명"
              type="text"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
            />
            <Input
              placeholder="캐릭터레벨"
              type="number"
              value={characterLevel}
              onChange={(e) => setCharacterLevel(e.target.value)}
            />
          </InputForm>
          <Button
            onClick={() => {
              if (characterName !== "") {
                addCharacter();
                initializeCharacterInfo();
              } else {
                localStorage.clear();
              }
            }}
          >
            등록
          </Button>
        </SubmitContainer>
      </GridContainer>
    </MainContainer>
  );
}

export default App;

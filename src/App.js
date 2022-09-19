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
  const [characterName, setCharacterName] = useState(""); // 캐릭터이름 input
  const [characterLevel, setCharacterLevel] = useState(); // 캐릭터레벨 Input

  const [array, setArray] = useState(
    Object.keys(localStorage).filter((item) => {
      return item !== "time";
    })
  );
  const [_, setSortedArray] = useState(
    array.filter((item) => {
      const orderValue = JSON.parse(localStorage.getItem(item))?.order;
      return orderValue;
    })
  );

  // 캐릭터 추가 함수
  const addCharacter = () => {
    newData.name = characterName;
    if (typeof characterLevel === undefined) {
      newData.level = 0;
    } else {
      newData.level = characterLevel;
    }
    newData.order = Object.keys(localStorage).length + 1;
    localStorage.setItem(characterName, JSON.stringify(newData));
  };

  // 제출 후 초기화 함수
  const initializeCharacterInfo = () => {
    setCharacterName("");
    setCharacterLevel(0);
  };

  useEffect(() => {
    // localStorage.setItem(JSON.stringify("time", { currentTime: 1, initialTime: 1 }));
    setArray(
      Object.keys(localStorage).filter((item) => {
        return item !== "time";
      })
    );
    setSortedArray(
      array.map((item) => {
        const orderValue = JSON.parse(localStorage.getItem(item))?.order;
        return orderValue;
      })
    );
    console.log(array);
  }, [Object.keys(localStorage).length]);

  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Muyaho의 숙제검사기</MainTitle>
      </TitleContainer>
      <GridContainer>
        {array.map((item, index) => {
          const itemArray = JSON.parse(localStorage.getItem(item));
          return (
            <CardKeyContainer key={itemArray?.order}>
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
              onChange={(e) => {
                setCharacterName(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && characterName !== "") {
                  addCharacter();
                  initializeCharacterInfo();
                }
              }}
            />
            <Input
              placeholder="캐릭터레벨"
              type="number"
              value={characterLevel}
              onChange={(e) => {
                setCharacterLevel(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && characterName !== "") {
                  addCharacter();
                  initializeCharacterInfo();
                }
              }}
            />
          </InputForm>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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

import { useState, useEffect } from "react";
import { Card, Footer, Spinner } from "./components";
import * as cheerio from "cheerio";
import { dataForm } from "./data/data-form";
import axios from "axios";
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
  const [_, setCharacterLevel] = useState(0); // 캐릭터레벨 Input
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [characterNameArray, setCharacterNameArray] = useState(
    Object.keys(localStorage).filter((item) => {
      return item !== "time";
    })
  );

  const getHtml = async (item) => {
    setLoading(true);
    try {
      const response = await axios
        .get(`Profile/Character/${item}`)
        .then((html) => {
          const $ = cheerio.load(html.data);
          const data = $(
            "#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__expedition > span:nth-child(2)"
          )
            .text()
            .split("");
          data.splice(0, 3);
          data.splice(data.length - 3, 3);
          const level = Number(data.join("").replace(/\D/g, ""));
          return level;
        });
      newData.level = response;
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // 캐릭터 추가 함수
  const addCharacter = async () => {
    await getHtml(characterName);
    console.log(newData.level);
    newData.name = characterName;
    newData.order = Object.keys(localStorage).length + 1;
    setSubmit(!submit);
    await localStorage.setItem(characterName, JSON.stringify(newData));
  };

  const getDateDiff = () => {
    const date = JSON.parse(localStorage.getItem("time"));
    const initialDate = new Date(date.initialTime);
    const currentDate = new Date();

    const diffDate = Math.abs(
      (currentDate.getTime() - initialDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDate >= 1) {
      setReset(true);

      let updatedDate = new Date();
      updatedDate.setDate(initialDate.getDate(initialDate) + 1);
      localStorage.setItem(
        "time",
        JSON.stringify({ initialTime: updatedDate, initialWeek: initialDate })
      );
      characterNameArray.map((item) => {
        const data = JSON.parse(localStorage.getItem(item));
        data.work.map((workData) => {
          if (workData.reset === "day") {
            workData.doWork = false;
          }
        });
        localStorage.setItem(item, JSON.stringify(data));
      });
    }
    return diffDate;
  };

  const getWeekDiff = () => {
    const date = JSON.parse(localStorage.getItem("time"));
    const initialWeek = new Date(date.initialWeek);
    const currentWeek = new Date();
    const diffWeek = Math.abs(
      (currentWeek.getTime() - initialWeek.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffWeek >= 7) {
      setReset(true);
      let updatedWeek = new Date();
      updatedWeek.setDate(initialWeek.getDate() + 7);
      localStorage.setItem(
        "time",
        JSON.stringify({ initialTime: initialWeek, initialWeek: updatedWeek })
      );
      characterNameArray.map((item) => {
        const data = JSON.parse(localStorage.getItem(item));
        data.work.map((workData) => {
          if (workData.reset === "week") {
            workData.doWork = false;
          }
        });
        localStorage.setItem(item, JSON.stringify(data));
      });
    }
  };

  // 제출 후 초기화 함수
  const initializeCharacterInfo = () => {
    setCharacterName("");
    setCharacterLevel(0);
  };

  useEffect(() => {
    console.log("useEffect run");
    localStorage.setItem(
      "time",
      JSON.stringify({
        initialTime: "September 20, 2022 06:00:00",
        initialWeek: "September 20, 2022 06:00:00",
      })
    );
    getDateDiff();
    getWeekDiff();

    setCharacterNameArray(
      Object.keys(localStorage).filter((item) => {
        return item !== "time";
      })
    );
  }, [submit]);

  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Muyaho 숙제검사기</MainTitle>
      </TitleContainer>
      <GridContainer>
        {characterNameArray.map((item, index) => {
          const itemArray = JSON.parse(localStorage.getItem(item));
          return (
            <CardKeyContainer key={itemArray?.order}>
              <Card
                reset={reset}
                item={item}
                delay={0.1 * index}
                arrayLength={characterNameArray.length}
              />
            </CardKeyContainer>
          );
        })}
        <SubmitContainer
          loading={loading}
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 0.1 * (characterNameArray.length + 1),
            },
          }}
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
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
            </>
          )}
        </SubmitContainer>
      </GridContainer>
      <Footer />
    </MainContainer>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Card, Footer, Spinner, Header } from "./components";
import * as cheerio from "cheerio";
import { dataForm } from "./data/data-form";
import axios from "axios";

import {
  GridContainer,
  Input,
  MainContainer,
  Button,
  SubmitContainer,
  Page,
  CardKeyContainer,
  InputForm,
  CheckIcon,
} from "./global-styles";
import { motion, useAnimation } from "framer-motion";

function App() {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  const newData = dataForm;
  const [characterName, setCharacterName] = useState(""); // 캐릭터이름 input
  const [_, setCharacterLevel] = useState(0); // 캐릭터레벨 Input
  const [reset, setReset] = useState(false);
  const [hardReset, setHardReset] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [characterNameArray, setCharacterNameArray] = useState(
    Object.keys(localStorage).filter((item) => {
      return item !== "time";
    })
  );
  const [isHover, setIsHover] = useState(false);
  const textHoverAnimation = useAnimation();
  const IconHoverAnimation = useAnimation();

  const getHtml = async (item) => {
    setLoading(true);
    try {
      const response = await axios
        .get(`${PROXY}/Profile/Character/${item}`)
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
    newData.name = characterName;
    newData.order = Object.keys(localStorage).length + 1;
    setSubmit(!submit);
    await localStorage.setItem(characterName, JSON.stringify(newData));
  };

  const deleteCharacter = (item) => {
    localStorage.removeItem(item);
    setDeleteState(!deleteState);
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
        data?.work.map((workData) => {
          if (workData.reset === "day") {
            return (workData.doWork = false);
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
            return (workData.doWork = false);
          }
        });
        localStorage.setItem(item, JSON.stringify(data));
      });
    }
  };

  const doHardRest = () => {
    localStorage.clear();
    setHardReset(true);
  };

  // 제출 후 초기화 함수
  const initializeCharacterInfo = () => {
    setCharacterName("");
    setCharacterLevel(0);
  };

  useEffect(() => {
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
  }, [submit, deleteState]);

  useEffect(() => {
    if (isHover) {
      textHoverAnimation.start({ y: -100, display: "none" });
      IconHoverAnimation.start({ y: 0, display: "block" });
    } else {
      textHoverAnimation.start({ y: 0, display: "block" });
      IconHoverAnimation.start({ y: 100, display: "none" });
    }
  }, [isHover]);

  useEffect(() => {
    if (hardReset) {
      window.location.reload();
    }
  }, [hardReset]);

  return (
    <Page>
      <MainContainer>
        <Header />
        <GridContainer>
          {characterNameArray.map((item, index) => {
            const itemArray = JSON.parse(localStorage.getItem(item));

            return (
              itemArray !== null && (
                <CardKeyContainer key={itemArray?.order}>
                  <Card
                    reset={reset}
                    delete={deleteState}
                    deleteCharacter={deleteCharacter}
                    item={item}
                    delay={0.1 * index}
                    arrayLength={characterNameArray.length}
                  />
                </CardKeyContainer>
              )
            );
          })}
          <SubmitContainer
            loading={loading ? 1 : 0}
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
                  onHoverStart={() => setIsHover(true)}
                  onHoverEnd={() => setIsHover(false)}
                  onClick={() => {
                    if (characterName !== "") {
                      addCharacter();
                      initializeCharacterInfo();
                    } else {
                      localStorage.clear();
                    }
                  }}
                >
                  <motion.p animate={textHoverAnimation}>등록</motion.p>
                  <motion.div animate={IconHoverAnimation}>
                    <CheckIcon />
                  </motion.div>
                </Button>
              </>
            )}
          </SubmitContainer>
        </GridContainer>
        <Footer hardReset={doHardRest} />
      </MainContainer>
    </Page>
  );
}

export default App;

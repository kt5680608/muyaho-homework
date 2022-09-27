import { useState, useEffect, useRef } from "react";
import { Card, Footer, Spinner, Header } from "../../components";
import * as cheerio from "cheerio";
import { dataForm, asciiArt, asciiText } from "../../data/data-form";
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
} from "./style.js";
import { motion, useAnimation, Reorder } from "framer-motion";

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
  const [onDrag, setOnDrag] = useState(false);
  const inputRef = useRef(null);
  const gridContainerRef = useRef(null);

  const [characterNameArray, setCharacterNameArray] = useState(
    Object.keys(localStorage)
      .filter((item) => {
        return item !== "time" && item !== "sortedNameArray";
      })
      .sort()
  );
  const [sortedNameArray, setSortedNameArray] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const [gridContainerWidth, setGridContainerWidth] = useState(0);
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
    newData.order = Object.keys(localStorage).length - 1;
    setSubmit(!submit);
    await localStorage.setItem(characterName, JSON.stringify(newData));
    localStorage.setItem(
      "sortedNameArray",
      JSON.stringify([...sortedNameArray, characterName])
    );
  };

  const deleteCharacter = (item) => {
    localStorage.removeItem(item);

    const data = sortedNameArray.filter((value) => {
      return value !== item;
    });
    localStorage.setItem("sortedNameArray", JSON.stringify(data));
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
        data?.work.map((workData) => {
          if (workData.reset === "week") {
            return (workData.doWork = false);
          }
        });
        localStorage.setItem(item, JSON.stringify(data));
      });
    }
  };

  // 전부 지우기
  const doHardReset = () => {
    localStorage.clear();
    setHardReset(true);
  };

  // 제출 후 초기화 함수
  const initializeCharacterInfo = () => {
    setCharacterName("");
    setCharacterLevel(0);
  };

  useEffect(() => {
    setIsHover(false);
    const timeData = JSON.parse(localStorage.getItem("time"));
    const nameData = JSON.parse(localStorage.getItem("sortedNameArray"));
    if (nameData === null) {
      localStorage.setItem("sortedNameArray", JSON.stringify([]));
    }

    if (timeData === null) {
      localStorage.setItem(
        "time",
        JSON.stringify({
          initialTime: "September 20, 2022 06:00:00",
          initialWeek: "September 20, 2022 06:00:00",
        })
      );
    }

    getDateDiff();
    getWeekDiff();

    setCharacterNameArray(
      Object.keys(localStorage).filter((item) => {
        return item !== "time" && item !== "sortedNameArray";
      })
    );
    setSortedNameArray(JSON.parse(localStorage.getItem("sortedNameArray")));
    setSortedNameArray((prev) => prev.filter((item) => item !== null));
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }

    setGridContainerWidth(gridContainerRef?.current.offsetWidth);
    console.log(sortedNameArray.length * 180);
  }, [submit, deleteState, gridContainerWidth]);

  useEffect(() => {
    if (isHover === true) {
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

  useEffect(() => {
    if (onDrag) {
      localStorage.setItem("sortedNameArray", JSON.stringify(sortedNameArray));
    }
  }, [sortedNameArray]);

  useEffect(() => {
    console.log(asciiText);
    console.log(asciiArt);
  }, []);

  return (
    <Page>
      <MainContainer>
        <Header nameArrayLength={sortedNameArray.length} />
        <GridContainer
          ref={gridContainerRef}
          drag="x"
          dragConstraints={{
            left: gridContainerWidth / -3,
            right: gridContainerWidth / 3,
          }}
        >
          <Reorder.Group
            axis="x"
            values={sortedNameArray}
            onReorder={setSortedNameArray}
          >
            {sortedNameArray?.map((item, index) => {
              const itemArray = JSON.parse(localStorage.getItem(item));
              return (
                itemArray !== null && (
                  <Reorder.Item
                    value={item}
                    key={item}
                    onDragStart={() => {
                      setOnDrag(true);
                    }}
                    onDragEnd={() => {
                      setOnDrag(false);
                    }}
                  >
                    <CardKeyContainer key={itemArray?.order}>
                      <Card
                        reset={reset}
                        delete={deleteState}
                        deleteCharacter={deleteCharacter}
                        item={item}
                        delay={0.1 * index}
                        onDrag={onDrag}
                        arrayLength={characterNameArray.length}
                      />
                    </CardKeyContainer>
                  </Reorder.Item>
                )
              );
            })}
          </Reorder.Group>
          <CardKeyContainer>
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
                      ref={inputRef}
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
                    <Button
                      style={{ display: loading ? "none" : "flex" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onHoverStart={() => setIsHover(true)}
                      onHoverEnd={() => setIsHover(false)}
                      onClick={() => {
                        if (characterName !== "") {
                          addCharacter();
                          initializeCharacterInfo();
                        }
                      }}
                    >
                      <motion.p
                        animate={textHoverAnimation}
                        initial={{ y: 0 }}
                        style={{
                          display: !isHover ? "flex" : "none",
                          fontSize: "12px",
                        }}
                      >
                        등록
                      </motion.p>
                      <motion.div
                        animate={IconHoverAnimation}
                        initial={{ y: 100 }}
                        style={{ display: isHover ? "flex" : "none" }}
                      >
                        <CheckIcon />
                      </motion.div>
                    </Button>
                  </InputForm>
                </>
              )}
            </SubmitContainer>
          </CardKeyContainer>
        </GridContainer>

        <Footer hardReset={doHardReset} />
      </MainContainer>
    </Page>
  );
}

export default App;

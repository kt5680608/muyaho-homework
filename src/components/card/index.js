import { useState, useLayoutEffect, useEffect } from "react";
import { data } from "../../data/data-form";
import {
  MainCardContainer,
  CharacterName,
  WorkInput,
  WorkContainer,
  CardDetail,
  CardDetailInfo,
} from "./style";
import { BsCheck2 } from "react-icons/bs";

function Card(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(props.item))
  );
  const [workArray, setWorkArray] = useState(data.work);
  const onChangeArrayValue = (index) => {
    const tmpArray = [...workArray];
    tmpArray[index].doWork = !workArray[index].doWork;
    setWorkArray(tmpArray);
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(props.item)));
  }, [props.item]);
  return (
    <MainCardContainer
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
    >
      <CharacterName>{data?.name}</CharacterName>
      <WorkContainer>
        {data?.work.map((item, key) => {
          return (
            <CardDetail>
              <CardDetailInfo style={{ color: " white" }} key={key}>
                {item.name}
              </CardDetailInfo>
              {item.doWork ? (
                <div
                  onClick={() => {
                    onChangeArrayValue(key);
                    const bool = item.doWork;
                    item.doWork = !bool;
                    localStorage.setItem(data.name, JSON.stringify(data));
                  }}
                >
                  <WorkInput
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.5 }}
                    checked={workArray[key].doWork}
                  >
                    <BsCheck2 color="white" style={{ strokeWidth: 2 }} />
                  </WorkInput>
                </div>
              ) : (
                <div
                  onClick={() => {
                    onChangeArrayValue(key);
                    const bool = item.doWork;
                    item.doWork = !bool;
                    localStorage.setItem(data.name, JSON.stringify(data));
                  }}
                >
                  <WorkInput
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.5 }}
                    checked={workArray[key].doWork}
                  />
                </div>
              )}
            </CardDetail>
          );
        })}
      </WorkContainer>
    </MainCardContainer>
  );
}

export default Card;

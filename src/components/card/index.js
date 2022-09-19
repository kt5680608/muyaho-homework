import { useState, useEffect } from "react";
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
  const [workArray, setWorkArray] = useState(data?.work);
  const onChangeArrayValue = (index) => {
    const tmpArray = [...workArray];
    tmpArray[index].doWork = !workArray[index].doWork;
    setWorkArray(tmpArray);
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(props.item)));
  }, [props.arrayLength]);
  return (
    <MainCardContainer
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: props.delay },
      }}
    >
      <CharacterName>{data?.name}</CharacterName>
      <WorkContainer>
        {data?.work.map((item, index) => {
          return (
            data.level >= item?.limit && (
              <CardDetail key={item.order}>
                <CardDetailInfo style={{ color: " white" }}>
                  {item.name}
                </CardDetailInfo>
                {item.doWork ? (
                  <div
                    onClick={() => {
                      onChangeArrayValue(index);
                      const bool = item.doWork;
                      item.doWork = !bool;
                      localStorage.setItem(data.name, JSON.stringify(data));
                    }}
                  >
                    <WorkInput
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.5 }}
                      checked={workArray[index].doWork}
                    >
                      <BsCheck2 color="white" style={{ strokeWidth: 2 }} />
                    </WorkInput>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      onChangeArrayValue(index);
                      const bool = item.doWork;
                      item.doWork = !bool;
                      localStorage.setItem(data.name, JSON.stringify(data));
                    }}
                  >
                    <WorkInput
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.5 }}
                      checked={workArray[index].doWork}
                    />
                  </div>
                )}
              </CardDetail>
            )
          );
        })}
      </WorkContainer>
    </MainCardContainer>
  );
}

export default Card;

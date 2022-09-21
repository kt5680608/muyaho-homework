import { useState, useEffect } from "react";
import {
  MainCardContainer,
  CardHeaderContainer,
  CharacterName,
  WorkInput,
  WorkContainer,
  CardDetail,
  CardDetailInfo,
  TrashIconButton,
  TrashIcon,
} from "./style";
import { Button } from "../../global-styles";
import { BsCheck2 } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
function Card(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(props.item))
  );
  const [workArray, setWorkArray] = useState(data?.work);
  const [reset, setReset] = useState(props.reset);
  const [deleteState, setDeleteState] = useState(props.delete);
  const onChangeArrayValue = (index) => {
    const tmpArray = [...workArray];
    tmpArray[index].doWork = !workArray[index].doWork;
    setWorkArray(tmpArray);
  };
  const [isHover, setIsHover] = useState(false);
  const textHoverAnimation = useAnimation();
  const IconHoverAnimation = useAnimation();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(props.item)));
    setReset(props.reset);
    setDeleteState(props.delete);
    if (reset) {
      setWorkArray(data?.work);
    }
  }, [props.arrayLength, props.reset, props.delete]);

  useEffect(() => {
    if (isHover) {
      textHoverAnimation.start({ y: -100, display: "none" });
      IconHoverAnimation.start({ y: 0, display: "block" });
    } else {
      textHoverAnimation.start({ y: 0, display: "block" });
      IconHoverAnimation.start({ y: 100, display: "none" });
    }
  }, [isHover]);
  return (
    <MainCardContainer
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: props.delay },
      }}
    >
      <CardHeaderContainer>
        <CharacterName>{data?.name}</CharacterName>
      </CardHeaderContainer>
      <WorkContainer>
        {data?.work.map((item, index) => {
          return (
            data.level >= item?.limit && (
              <CardDetail>
                <CardDetailInfo style={{ color: " white" }}>
                  {item.name}
                </CardDetailInfo>
                {item.doWork ? (
                  <div
                    key={item.order}
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
                      checked={item?.doWork}
                    >
                      <BsCheck2 color="white" style={{ strokeWidth: 2 }} />
                    </WorkInput>
                  </div>
                ) : (
                  <div
                    key={item.order}
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
                      checked={item?.doWork}
                    />
                  </div>
                )}
              </CardDetail>
            )
          );
        })}
      </WorkContainer>
      <Button
        initial={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        type="delete"
        onClick={() => {
          props.deleteCharacter(props.item);
        }}
      >
        <motion.p animate={textHoverAnimation}>삭제</motion.p>
        <motion.div animate={IconHoverAnimation}>
          <TrashIcon />
        </motion.div>
      </Button>
    </MainCardContainer>
  );
}

export default Card;

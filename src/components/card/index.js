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
    JSON.parse(localStorage.getItem(props?.item))
  );
  const [workArray, setWorkArray] = useState(data?.work);
  const [reset, setReset] = useState(props.reset);
  const [preventClick, setPreventClick] = useState(false);
  const [deleteState, setDeleteState] = useState(props.delete);
  const onChangeArrayValue = (index) => {
    const tmpArray = [...workArray];
    tmpArray[index].doWork = !workArray[index].doWork;
    setWorkArray(tmpArray);
  };
  const [isHover, setIsHover] = useState(false);
  const textHoverAnimation = useAnimation();
  const IconHoverAnimation = useAnimation();
  const mainContainerAnimation = useAnimation();
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(props?.item)));
    setReset(props.reset);
    setDeleteState(props.delete);
    if (reset) {
      setWorkArray(data?.work);
    }
  }, [props.arrayLength, props.reset, props.delete]);
  useEffect(() => {
    setPreventClick(!props.onDrag);
  }, [props.onDrag]);
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
    if (!isOpen) {
      mainContainerAnimation.start({ height: "30px" });
    } else {
      mainContainerAnimation.start({ height: "100%" });
    }
  });
  return (
    <MainCardContainer
      animate={mainContainerAnimation}
      onClick={() => {
        if (isOpen === false) {
          setIsOpen(!isOpen);
        }
      }}
    >
      <CardHeaderContainer
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          if (preventClick) {
            setIsOpen(!isOpen);
          }
        }}
      >
        <CharacterName>{data?.name}</CharacterName>
      </CardHeaderContainer>

      <WorkContainer style={{ display: isOpen ? "grid" : "none" }}>
        {data?.work.map((item, index) => {
          return (
            data.level >= item?.limit &&
            item.type === "non-laid" && (
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
      <hr style={{ display: isOpen ? "grid" : "none" }} />
      <WorkContainer style={{ display: isOpen ? "grid" : "none" }}>
        {data?.work.map((item, index) => {
          return (
            item.type === "laid" && (
              <CardDetail level={data?.level} limit={item?.limit}>
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
      <hr style={{ display: isOpen ? "grid" : "none" }} />
      <WorkContainer style={{ display: isOpen ? "grid" : "none" }}>
        {data?.work.map((item, index) => {
          return (
            data.level >= item?.limit &&
            item.type === "abyss" && (
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
        style={{ display: isOpen ? "flex" : "none" }}
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

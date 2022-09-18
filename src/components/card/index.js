import { useState, useLayoutEffect, useEffect } from "react";
import { data } from "../../data/data-form";
import { MainCardContainer } from "./style";

function Card(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(props.item))
  );

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(props.item)));
    console.log(data?.name);
  }, [props.item]);
  return (
    <div>
      <div>
        {data?.name}

        <div>
          {data?.work.map((item, key) => {
            return (
              <div>
                <p key={key}>{item.name}</p>
                <input
                  type="checkbox"
                  defaultChecked={item.doWork}
                  onChange={() => {
                    const bool = item.doWork;
                    item.doWork = !bool;
                    localStorage.setItem(data.name, JSON.stringify(data));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;

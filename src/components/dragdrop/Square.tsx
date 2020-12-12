import React, { useState } from "react";
import styled from "styled-components";
import { DragObjectWithType, useDrop } from "react-dnd";
import { ItemTypes } from "../../types";
import Cat from "../dragdrop/Cat";

const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border-style: solid;
`;

const Square: React.FC<{ catNumber: number }> = (props) => {
  const [catNum, setCatNum] = useState(props.catNumber);
  const [, drop] = useDrop({
    accept: ItemTypes.CAT,
    drop: (item: DragObjectWithType) => {
      if (item.type === ItemTypes.CAT) {
        setCatNum(catNum + 1);
        return {
          inCat: true,
        };
      } else {
        return {
          inCat: false,
        };
      }
    },
  });
  return (
    <Style ref={drop}>
      {Array(catNum)
        .fill(0)
        .map((_, i) => (
          <Cat key={i} moveCat={() => {}} />
        ))}
    </Style>
  );
};

export default Square;

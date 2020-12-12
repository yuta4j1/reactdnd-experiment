import React, { useState } from "react";
import styled from "styled-components";
import AnimalTemplate from "./AnimalTemplate";
import { AnimalTypes, Animal, AnimalLiteral } from "../../../types";

const animalArray: Animal[] = [
  {
    idx: 0,
    type: AnimalTypes.CAT,
    disp: "🐈",
  },
  {
    idx: 1,
    type: AnimalTypes.DOG,
    disp: "🐕",
  },
  {
    idx: 2,
    type: AnimalTypes.HAM,
    disp: "🐁",
  },
];

const Outline = styled.div`
  border: solid;
  padding: 20px;
`;

// 動物の要素を入れ替える
const swapByIndex = (idx1: number, idx2: number, array: Animal[]): Animal[] => {
  console.log("idx1", idx1);
  console.log("idx2", idx2);
  let ret: Animal[] = [];
  for (let i = 0; i < array.length; i++) {
    if (i === idx1) {
      ret.push({
        idx: i,
        type: array[idx2].type,
        disp: array[idx2].disp,
      });
    } else if (i === idx2) {
      ret.push({
        idx: i,
        type: array[idx1].type,
        disp: array[idx1].disp,
      });
    } else {
      ret.push(array[i]);
    }
  }
  console.log("ret", ret);
  return ret;
};

const AnimalPlate: React.FC<{}> = (props) => {
  const [animals, setAnimals] = useState(animalArray);
  return (
    <Outline>
      {animals.map((v, i) => {
        return (
          <AnimalTemplate
            key={i}
            sort={(dragIdx: number, dropIdx: number) => {
              setAnimals(swapByIndex(dragIdx, dropIdx, animals));
            }}
            getIdx={(type: AnimalLiteral) => {
              return animals.find((v) => v.type === type)?.idx;
            }}
            {...v}
          />
        );
      })}
    </Outline>
  );
};

export default AnimalPlate;

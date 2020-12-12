import React, { useRef } from "react";
import styled from "styled-components";
import { AnimalLiteral, AnimalTypes, Animal } from "../../../types";
import {
  useDrag,
  DragSourceMonitor,
  DropTargetMonitor,
  useDrop,
  DragObjectWithType,
} from "react-dnd";

const Padding = styled.div`
  padding: 12px;
  margin: 12px;
  background-color: #e0dede;
  cursor: pointer;
`;

const AnimalTemplate: React.FC<{
  idx: number;
  type: AnimalLiteral;
  disp: string;
  sort: (drag: number, drop: number) => void;
  getIdx: (type: string) => number;
}> = (props) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: props.type },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(item, monitor) {
      const idxObj = monitor.getDropResult();
      props.sort(props.idx, idxObj.idx);
    },
  });

  const [, drop] = useDrop({
    accept: [AnimalTypes.CAT, AnimalTypes.DOG, AnimalTypes.HAM],
    drop: (item: DragObjectWithType, monitor: DropTargetMonitor) => {
      //   const type = item.type.toString();
      //   console.log("type", type);
      return {
        idx: props.idx,
      };
    },
  });

  // refをラップ
  drag(drop(ref));
  return <Padding ref={ref}>{props.disp}</Padding>;
};

export default AnimalTemplate;

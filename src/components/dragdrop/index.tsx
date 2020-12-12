import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Square from "./Square";
import CatPool from "../dragdrop/CatPool";
import AnimalPlate from "./animal-plate";

const DragDrop: React.FC<{}> = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Square catNumber={0} />
      <CatPool catNumber={8} />
      <AnimalPlate />
    </DndProvider>
  );
};

export default DragDrop;

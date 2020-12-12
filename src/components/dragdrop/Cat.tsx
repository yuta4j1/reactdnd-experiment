import React from "react";
import { DragSourceMonitor, useDrag, DragObjectWithType } from "react-dnd";
import { ItemTypes } from "../../types";

const Cat: React.FC<{ moveCat: () => void }> = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CAT },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end(item: DragObjectWithType, monitor: DragSourceMonitor) {
      const result = monitor.getDropResult();
      if (result?.inCat) {
        props.moveCat();
      }
    },
  });
  return <div ref={drag}>🐈</div>;
};

export default Cat;

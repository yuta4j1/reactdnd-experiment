import React, { useState } from "react";
import styled from "styled-components";
import Cat from "../dragdrop/Cat";

const Pool = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border: solid;
`;

const CatPool: React.FC<{ catNumber: number }> = (props) => {
  const [catNum, setCatNum] = useState(props.catNumber);
  return (
    <Pool>
      {Array(catNum)
        .fill(0)
        .map((_, i) => (
          <Cat key={i} moveCat={() => setCatNum(catNum - 1)} />
        ))}
    </Pool>
  );
};

export default CatPool;

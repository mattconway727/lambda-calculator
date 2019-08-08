import React, { useState } from "react";

//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numState, setNum] = useState(numbers);
  return (
    <div>
      {numState.map(num => {
        return <NumberButton number={num} />;
      })}
    </div>
  );
};

export default Numbers;

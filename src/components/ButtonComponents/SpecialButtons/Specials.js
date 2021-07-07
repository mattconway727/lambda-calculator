import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spState, setSpState] = useState(specials);

  return (
    <div>
      {spState.map(sp => {
        return <SpecialButton special={sp} />;
      })}
    </div>
  );
};

export default Specials;

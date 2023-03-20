import React, { useContext } from "react";
import { Context } from "./index";

const ComponentC = (props, ref) => {
  const count = useContext(Context);
  return (
    <button onClick={() => count?.countDispatch("increment")}>
      {count?.countState}
    </button>
  );
};

export default ComponentC;

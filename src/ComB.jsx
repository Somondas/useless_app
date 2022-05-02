import react from "react";
import { useContext } from "react/cjs/react.production.min";
import { Fname } from "./ComA";

const ComB = () => {
     const fname = useContext(Fname)
  return (
    <>
     <h1>
         MY name is {fname}
     </h1>
      
    </>
  );
};

export default ComB;

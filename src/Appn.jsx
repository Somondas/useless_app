import react from "react";
import { Route } from "react-router-dom";
import { Routes} from "react-router-dom";

import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import Error from "./Error";

const Appn = () => {
  return (
    <>
    {/* <Link to='/' > contact us</Link>
    <Link to='/about'> About us</Link> */}
    <Navbar />
      <Routes>
        <Route exact path="/"  exact element={<Contact/>}  />
        <Route  exact path="/about" element={<About/>} />
        <Route element={<Error/>} />
      </Routes>
      {/* <About /> */}
    </>
  );
};

export default Appn;

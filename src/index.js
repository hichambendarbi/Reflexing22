import React from "react";
import ReactDOM from "react-dom";
import Flex from "./reFlexing";

//Import Website layout
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

//import website pages
import Home from "./Component/Home";
/**
 * Website Pages
 */

/***
 App()=>{

  <flex>

    <Header/>
    <Router href="Contact"   compnonet={Contact} />
    <Footer/>
  
  <flex>


 }
 */

import "./styles.css";

function App() {
  return (
    <Flex style={{ padding: "0", margin: "0px" }}>
      <Header />
      {/**to do add router to home */}
      <Home />
      {/**to do add router to Patient section */}
      {/**to do add router to Professional section */}
      {/**to do add router to Services */}
      <Footer />
    </Flex>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/** */

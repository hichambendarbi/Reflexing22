import React from "react";
import ReactDOM from "react-dom";
import Flex from "./reFlexing";

//Import Website layout
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Container from "./Layout/Container";
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
      <Container />
      <Footer />
    </Flex>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/** */

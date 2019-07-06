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
import Home from "./Component/Home";

/**
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
    <Flex>
      <Header />
      <Container />
      <Footer />
    </Flex>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/** */

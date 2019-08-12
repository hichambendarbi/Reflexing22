import React from "react";
import ReactDOM from "react-dom";
import Flex from "./reFlexing";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Website layout
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

//import website pages
import Home from "./Component/Home";
import Patient from "./Component/Patient1";
import Professional from "./Component/Professional1";
import Contact from "./Component/Contact";

/**
 * Website Pages
 */

import "./styles.css";

function App() {
  return (  
    <Flex style={{ padding: "0", margin: "0px" }}>
    
      <Header />
      {/**to do add router to home */}
      <Route exact path="/" component={Home} />
      {/**to do add router to Patient section */}
      <Route path="/patient" component={Patient} />
      {/**to do add router to Professional section */}
      <Route path="/professional" component={Professional} />
      {/**to do add router to Services */}
      <Route path="/contact" component={Contact} />

      <Footer />
    </Flex>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
/** */

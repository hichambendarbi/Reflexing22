import React from "react";
import ReactDOM from "react-dom";
import Flex from "./reFlexing";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import Website layout
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

//import website pages
import Home from "./Component/Home";
//import website pages/profes
import Patient from "./Component/Patient/Patients";
import AccueilLabo from "./Component/Patient/Acceuil";
import Urgences from "./Component/Patient/Urgences";
import AvantExamen from "./Component/Patient/AvantExamen";
import Documents from "./Component/Patient/Documents";
import Resultat from "./Component/Patient/Resultat";
//import website pages/profes
import Professional from "./Component/Professionnelles/Professional1";
import Chat from "./Component/Professionnelles/Chat";
import Regles from "./Component/Professionnelles/Regles";
import Partenariat from "./Component/Professionnelles/Partenariat";
import Contributeur from "./Component/Professionnelles/Contributeur";
import Statistique from "./Component/Professionnelles/Statistique";

/**
 * Website Modules
 */
import Contact from "./Component/Contact";
import Login from "./Login/src/login"

/**
 * Redux Modules
 */

import {Provider} from "react-redux"
import { createStore } from "redux";
import RootReducer from "./Login/src/login/store/reducers";

//Styles importation
import "./styles.css";

const Store = createStore(RootReducer);

function App() {
  return (  
    <Flex style={{ padding: "0", margin: "0px" }}>
    
      <Header />
      {/**to do add router to home */}
      <Route exact path="/" component={Home} />
      {/**to do add router to Patient section */}
      <Route path="/Patient" component={Patient} />
      <Route path="/AccueilLabo" component={AccueilLabo} />
      <Route path="/AvantExamen" component={AvantExamen} />
      <Route path="/Documents" component={Documents} />
      <Route path="/Resultat" component={Resultat} />
      <Route path="/Urgences" component={Urgences} />
      {/**to do add router to Professional section */}
      <Route path="/Professional" component={Professional} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Regles" component={Regles} />
      <Route path="/Partenariat" component={Partenariat} />
      <Route path="/Contributeur" component={Contributeur} />
      <Route path="/Statistique" component={Statistique} />
      {/**to do add router to Services */}
      <Route path="/Contact" component={Contact} />
      {/**router to Login */}
      <Login />
      <Footer />
    </Flex>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <Router>
      <Provider store={Store}>
        <App />
      </Provider>
    </Router>, 
  rootElement);
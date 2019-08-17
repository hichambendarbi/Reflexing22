import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import Navbar1 from "../Component/Modules/Navbar1";

//import icon header
import { Login, Tele, Location } from "../img";

import "../styles.css";

const BoxPrincipale = styled.div`
  width: 100%;
`;

const BoxHeader1 = styled.div`
  width: 100%;
  font-size: 15px;
  background-color: #4fad36;
  height: 50px;
  color: white;
  font-weight: 900;
  @media (max-width: 853px) {
    height: 50px;
    font-size: 10px;
  }
  @media (max-width: 660px) {
    height: 50px;
    font-size: 7px;
  }
  @media (max-width: 300px) {
    height: 50px;
    font-size: 10px;
  }
`;

const Flex1 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 11px;
  justify-content: center;
  justify-content: flex-start;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;
const BoxNameLabo = styled.div`
  margin-right: 35px;
  @media (max-width: 1025px) {
    margin-right: 100px;
  }
  @media (max-width: 560px) {
    font-size: 15px;
    margin-right: 30px;
    display: none;
  }
  @media (max-width: 400px) {
    margin-right: 0px;
    display: none;
  }
  @media (max-width: 300px) {
    display: none;
  }
`;
const BoxHeader2 = styled.div`
  width: 100%;
  font-size: 15px;
  color: white;
`;

const TeleHide = styled.span`
  @media (max-width: 960px) {
    font-size: 10px;
  }
  @media (max-width: 560px) {
    font-size: 5px;
  }
  @media (max-width: 370px) {
    display: none;
  }
`;

const Header = () => (
  <BoxPrincipale style={{ width: "100%" }}>
    <Flex style={{ width: "100%" }}>
      <BoxHeader1>
        <Flex1 row>
          <BoxNameLabo>Laboratoire Fes des Analyses Médicales</BoxNameLabo>
          <Box>
            <Tele height="25" width="40" fill="red" />
            <TeleHide> +212 637-52-17-01</TeleHide>
          </Box>
          <Box>
            <Location height="25" width="40" fill="red" />
            <TeleHide> Bd Biranzarane, lot 8, Res Nour,Bureau Nº11 Atlas-Fes</TeleHide>
          </Box>
          <Box>
            <Login height="25" width="40" />
            <TeleHide> Se connecter</TeleHide>
          </Box>
        </Flex1>
      </BoxHeader1>
      <BoxHeader2>
        <Navbar1 />
      </BoxHeader2>
    </Flex>
  </BoxPrincipale>
);

export default Header;

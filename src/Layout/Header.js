import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import Navbar1 from "../Component/Navbar1";

//import icon header
import { Login, Tele, Location } from "../img";

import "../styles.css";

//Nom de laboratoire
const LaboratoryName = styled.div`
  background-color: transparent;
  height: 30px;
  color: white;
  flex: 1;
  font-size: 20px;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
  font-weight: 900;
`;

//Tele de laboratoire
const LaboratoryTele = styled.div`
  background-color: transparent;
  color: white;
  flex: 1;
`;

//Adress de laboratoire
const LaboratoireAddress = styled.div`
  width: 40px;
  color: white;
  flex: 1;
`;

const LaboratoireConnecter = styled.div`
  width: 40px;
  color: white;
  flex: 1;
  justify-content: flex-end;
  order: 2;
`;
const BoxPrincipale = styled.div`
  width: 100%;
`;

const BoxHeader1 = styled.div`
  width: 100%;
  font-size: 15px;
  background-color: #4fad36;
`;
const BoxHeader2 = styled.div`
  width: 100%;
  font-size: 20px;
`;

const TeleHide = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`;

const Header = () => (
  <BoxPrincipale style={{ width: "100%" }}>
    <Flex style={{ width: "100%" }}>
      <BoxHeader1 className="B1">
        <Flex className="B2" row style={{ width: "100%", marginLeft: "16px" }}>
          <LaboratoryName>Laboratoire Fes</LaboratoryName>
          <Box style={{ flex: "2", marginLeft: "100px" }}>
            <Flex row>
              <LaboratoryTele>
                <Tele height="30" width="50" fill="red" />
                <TeleHide> +212 521213244</TeleHide>
              </LaboratoryTele>
              <LaboratoireAddress>
                <Location height="30" width="50" fill="red" /> EL Atlass rue des
                far
              </LaboratoireAddress>
              <LaboratoireConnecter>
                <Login height="30" width="50" />
                Se Connecter
              </LaboratoireConnecter>
            </Flex>
          </Box>
        </Flex>
      </BoxHeader1>
      <BoxHeader2>
        <Navbar1 />
      </BoxHeader2>
    </Flex>
  </BoxPrincipale>
);

export default Header;

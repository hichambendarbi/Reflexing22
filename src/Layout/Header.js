import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import Navbar1 from "../Component/Navbar1";

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
  margin-top: 10px;
  justify-content: center;
  justify-content: flex-start;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
`;
const BoxNameLabo = styled.div`
  margin-right: 60px;
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
    display: none;
  }
`;

const Header = () => (
  <BoxPrincipale style={{ width: "100%" }}>
    <Flex style={{ width: "100%" }}>
      <BoxHeader1>
        <Flex1 row>
          <BoxNameLabo>Laboratoire Fes</BoxNameLabo>
          <Box>
            <Tele height="25" width="40" fill="red" />
            <TeleHide> +212 521213244</TeleHide>
          </Box>
          <Box>
            <Location height="25" width="40" fill="red" />
            <TeleHide> +212 521213244</TeleHide>
          </Box>
          <Box>
            <Login height="25" width="40" />
            <TeleHide> +212 521213244</TeleHide>
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

import React from "react";
import styled from "styled-components";
import Flex, { Box } from "../reFlexing";
import "../styles.css";

const Flex1 = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;

const Box2 = styled.div`
  height: 250px;
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
  color: gray;
  background-color: #f7f7f7;
  @media (max-width: 800px) {
    order: 1;
  }
  @media (max-width: 650px) {
    height: 350px;
  }

  @media (max-width: 450px) {
    height: 220px;
    font-size: 10px;
    padding: 8rem 0;
  }
  @media (max-width: 411px) {
    height: 200px;
    font-size: 10px;
    padding: 8rem 0;
  }
  @media (max-width: 375px) {
    height: 230px;
    font-size: 10px;
    padding: 8rem 0;
  }
  @media (max-width: 320px) {
    height: 230px;
    font-size: 10px;
    padding: 8rem 0;
  }
`;

const SC1 = () => {
  return (
    <Flex1 row className="F1">
      <Box2 className="Descrip">
        <span className="sp1">Pourquoi le laboratoire Fes ?</span>
        <br />
        <br />
        Laboratoire d’analyses médicales, Laboratoire Fes est le leader parmis
        plus de 50 laboratoires de biologie médicale a fes et dans le maroc,
        depuis 1995. Le Laboratoire Fes assure toute la prise en charge du
        patient, pour tous types d’analyses, avec ou sans RDV. Grâce à notre
        grand equipe de spécialistes et notre professionnalisme nous vous
        garantissons la livraison de la majorité de vos résultats d’analyses
        médicales sous 24.
      </Box2>
    </Flex1>
  );
};

export default SC1;

import React from "react";
import styled from "styled-components";
import Flex, { Box } from "../reFlexing";
import "../styles.css";
import { Materials, Patient, Personnels } from "../img";
import { Button } from "reactstrap";

const Flex1 = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
`;

const Box1 = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: gray;
  background-color: #f7f7f7;
  @media (max-width: 870px) {
    order: 2;
    position: absolute;
    margin-top: 250px;
  }
`;
const Box2 = styled.div`
  height: 250px;
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
  color: gray;
  background-color: #f7f7f7;
`;

const SC2 = () => {
  return (
    <Box class="site-section">
      <Box class="container">
        <flex class="row">
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <Patient width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">
              <a href="#" className="ok">
                PRÉPAREZ VOTRE
                <br />
                EXAMEN
              </a>
            </h3>
            <p>Retrouvez tous nos conseils pour bien préparer votre examen</p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <Personnels width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">
              <a href="#" className="ok">
                Vos documents utiles
              </a>
            </h3>
            <p>
              VOUS DEVEZ VOUS MUNIR : de l’ordonnance du médecin (datant de
              moins d’un an)
              <br />
              de votre carte vitale ou de votre attestation de sécurité sociale
              <br />
              de l’attestation de votre mutuelle.
            </p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-food d-block mb-3 display-3 text-secondary" />
            <Materials width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">
              <a href="#" className="ok">
                Equipements et materiels
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </div>
        </flex>
      </Box>
    </Box>
  );
};

export default SC2;

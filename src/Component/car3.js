import React from "react";
import styled from "styled-components";
import Flex, { Box } from "../reFlexing";
import "../styles.css";
import { Materials, Patient, Personnels } from "../img";

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
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <Patient width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">Espaces patients</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate verro fugiat sit eius sequi.
            </p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <Personnels width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">Espace professionnels</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 text-center">
            <span class="flaticon-food d-block mb-3 display-3 text-secondary" />
            <Materials width="120px" height="70px" />
            <h3 class="text-primary h4 mb-2">Equipements et materiels</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SC2;

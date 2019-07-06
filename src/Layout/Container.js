import React from "react";
import Flex, { Box } from "../reFlexing";
import styled from "styled-components";
import { UncontrolledCarousel, Carousel } from "reactstrap";
import img1 from "../img-icons/L-examen-de-biologie-medicale.jpg";
import img2 from "../img-icons/analyse-medicale-la-seyne-sur-mer-slide3.jpg";
import img3 from "../img-icons/prise-sang-analyse-medicale.jpg";
import img4 from "../img-icons/professionnels-sante-examen-medicale.jpg";

const img = [
  {
    src: img2
  }
];

const Carrousel = () => <UncontrolledCarousel items={img} />;
const BoxPrincipaleContainer = styled.div`
  width: 100%;
`;

const Container = () => (
  <BoxPrincipaleContainer>
    <Flex style={{ width: "100%" }}>
      <Carrousel />
    </Flex>
  </BoxPrincipaleContainer>
);

export default Container;

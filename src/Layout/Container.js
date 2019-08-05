import React from "react";
import styled from "styled-components";
import CarouselPage from "../Component/car1";
import SC1 from "../Component/car2";
import SC2 from "../Component/service";
import S2 from "../Component/service2";
import SC01 from "../Component/Contact";
import Navbar1 from "../Component/Navbar1";
import { UncontrolledCarousel, Carousel } from "reactstrap";
import img1 from "../img-icons/L-examen-de-biologie-medicale.jpg";
import img2 from "../img-icons/analyse-medicale-la-seyne-sur-mer-slide3.jpg";
import img3 from "../img-icons/prise-sang-analyse-medicale.jpg";
import img4 from "../img-icons/professionnels-sante-examen-medicale.jpg";

const img = [
  {
    src: img2,
    altText: "Slide 1",
    caption: "Fes",
    header: "Laboratoire Fes"
  }
];

const Carrousel = () => <UncontrolledCarousel items={img} />;
const BoxPrincipaleContainer = styled.div`
  width: 100%;
`;

const Container = () => (
  <BoxPrincipaleContainer style={{ width: "100%" }}>
    <CarouselPage />
    <SC2 />
    <S2 />
    <SC01 />
  </BoxPrincipaleContainer>
);

export default Container;

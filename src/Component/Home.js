import React from "react";
import CarouselPage from "../Component/Modules/car1";
import SC2 from "./Modules/service";
import S2 from "./Modules/service2";
import SC01 from "./Contact";
import Container from "../Layout/Container";
/**
 * import page layout
 */
const Home = () => (
  <Container>
    <CarouselPage />
    <SC2 />
    <S2 />
    <SC01 />
  </Container>
);

export default Home;

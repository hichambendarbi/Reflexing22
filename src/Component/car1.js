import React from "react";
import styled from "styled-components";
import Flex, { Box } from "../reFlexing";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer
} from "mdbreact";
import "../styles.css";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView style={{ marginBottom: "250px" }}>
              <img
                className="d-block w-100"
                src="https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/01/14/node_520646/39968856/public/2019/01/14/B9718178063Z.1_20190114110725_000%2BG31COC4S3.1-0.jpg?itok=jQw--YTl"
                alt="Second slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption style={{ marginBottom: "250px" }}>
              <h3 className="h3-responsive">
                Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES
              </h3>
              <p className="h3-responsive1">Second text</p>
              <button className="btnRdv">Rendez-vous</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="http://www.laboratoire-vialatte.com/photos/_images/fond4-1/analyse-medicale-la-seyne-sur-mer-slide3.jpg"
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption style={{ marginBottom: "250px" }}>
              <h3 className="h3-responsive">
                Laboratoire Fes, RECUEIL ET ANALYSE D'ÉCHANTILLONS BIOLOGIQUES
              </h3>
              <p className="h3-responsive1">Third text</p>
              <button className="btnRdv">Rendez-vous</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;

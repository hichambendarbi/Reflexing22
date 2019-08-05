import React from "react";
import { Box } from "../reFlexing";
import "../styles.css";
import { RDV, PRD, Urgence } from "../img";

const SC2 = () => {
  return (
    <Box className="site-section">
      <Box className="container">
        <flex className="row">
          <Box className="col-md-6 col-lg-4 mb-4 text-center">
            <span className="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <Urgence width="120px" height="70px" />
            <h3 className="text-primary h4 mb-2">
              <a href="!#" className="ok">
                Urgence 24/7j
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </Box>
          <Box className="col-md-6 col-lg-4 mb-4 text-center">
            <span className="flaticon-blood d-block mb-3 display-3 text-secondary" />
            <RDV width="120px" height="70px" />
            <h3 className="text-primary h4 mb-2">
              <a href="!#" className="ok">
                Rendez-vous
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </Box>
          <Box className="col-md-6 col-lg-4 mb-4 text-center">
            <span className="flaticon-food d-block mb-3 display-3 text-secondary" />
            <PRD width="120px" height="70px" />
            <h3 className="text-primary h4 mb-2">
              <a href="!#" className="ok">
                Prelevement A Domicile
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi.
            </p>
          </Box>
        </flex>
      </Box>
    </Box>
  );
};

export default SC2;

import React from "react";
import { Box } from "../../reFlexing";
import "../../styles2/style.css";
import { RDV, PRD, Urgence } from "../../img";

const Card = ({ icon, title, text }) => (
  <Box className="col-md-6 col-lg-4 mb-4 text-center">
    <span className="flaticon-blood d-block mb-3 display-3 text-secondary" />
    {icon}
    <h3 className="text-primary h4 mb-2">
      <a href="!#" className="ok">
        {title}
      </a>
    </h3>
    <p>{text}</p>
  </Box>
);

const Emergency = () => (
  <Card
    icon={<Urgence width="120px" height="70px" />}
    title={"Urgence 24/7j"}
    text={
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quis, nemo explicabo cupiditate vero fugiat sit eius sequi."
    }
  />
);

const Appointement = () => (
  <Card
    icon={<RDV width="120px" height="70px" />}
    title="Rendez-Vous"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi."
  />
);

const BloodCollectAtHome = () => (
  <Card
    icon={<PRD width="120px" height="70px" />}
    title="Prise de Sang a Domicile"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              quis, nemo explicabo cupiditate vero fugiat sit eius sequi."
  />
);

const SC2 = () => {
  return (
    <Box className="site-section">
      <Box className="container">
        <flex className="row">
          <Emergency />
          <Appointement />
          <BloodCollectAtHome />
        </flex>
      </Box>
    </Box>
  );
};

export default SC2;

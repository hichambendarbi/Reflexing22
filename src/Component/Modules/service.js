import React from "react";
import { Box } from "../../reFlexing";
import "./styleService2/style.css";
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
      "Si Vous Avez des analyses Urgent. N'hesitez pas de Nous appeler sur +212 637 521-701"
    }
  />
);

const Appointement = () => (
  <Card
    icon={<RDV width="120px" height="70px" />}
    title="Rendez-Vous"
    text="Vous pouvez prendre un rendez-Vous 24h/7j en parlant avec Nous sur Whatsap +212 637 521-701."
  />
);

const BloodCollectAtHome = () => (
  <Card
    icon={<PRD width="120px" height="70px" />}
    title="Prise de Sang a Domicile"
    text="Le laboratoire adopte un systeme de prelevent a domicile 24/24h 7/7j sur +212 637 521-701."
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

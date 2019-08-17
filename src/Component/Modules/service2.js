import React from "react";
import styled from "styled-components";
import { Box } from "../../reFlexing";
import "./styleService2/style.css";
import { Resultat, Equipment, Profesionnel, Connect } from "../../img";

const Box2 = styled.div`
  margin-top: -100px;
`;


const WhyUS = () => (
  <Box className="col-xl-4 col-md-4 align-self-center">
    <Box className="single_feature_text ">
      <h2>Pourquoi le laboratoire Fes ?</h2>
      <p>
        Laboratoire d’analyses médicales, Laboratoire Fes est le leader parmis
        plus de 50 laboratoires de biologie médicale a fes et dans le maroc,
        depuis 1995. Le Laboratoire Fes assure toute la prise en charge du
        patient, pour tous types d’analyses, avec ou sans RDV. Grâce à notre
        grand equipe de spécialistes et notre professionnalisme nous vous
        garantissons la livraison de la majorité de vos résultats d’analyses
        médicales sous 24.
      </p>
      <a href="!#" className="btn_2">
        Lire plus
      </a>
    </Box>
  </Box>
);

const Cards = ({ icon, title, text }) => (
  <Box className="col-lg-6 col-sm-6">
    <Box className="single_feature">
      <Box className="single_feature_part">
        <span className="single_feature_icon">
          <Equipment width="35px" height="35px" fill="green" />
        </span>
        <h4>{title}</h4>
        <p>{text}</p>
      </Box>
    </Box>
  </Box>
);

const OurEquipement = () => (
  <Cards
    title="Nos Equipements"
    text="Notre Groupe est engagé dans une démarche Qualité depuis sa création, en apportant un materiel de proximité et de haute performance."
    icon={<Equipment width="35px" height="35px" fill="green" />}
  />
);

const OurProfessionals = () => (
  <Cards
    title="Professionelles"
    text="Un espace medecins professionnels de santé assure la suivi des examens des patients avec un rapport service de haute qualite et performance."
    icon={<Profesionnel width="35px" height="35px" fill="green" />}
  />
);

const OurReports = () => (
  <Cards
    title="Nos resultats"
    text="Un serveur des résultats de laboratoire Fes est toujours marche pour bien vos servir vos demandes des resultas en toute securite et rapidite."
    icon={<Resultat width="35px" height="35px" fill="green" />}
  />
);

const OurPartners = () => (
  <Cards
    title="Nos partenariats"
    text="Notre démarche developement, unique au sein du monde de sante, vise à faire des collaborations avec les professionnels de santé."
    icon={<Connect width="35px" height="35px" fill="green" />}
  />
);

const S2 = () => {
  return (
    <Box2 className="feature_part padding_top">
      <Box className="container">
        <flex className="row">
          <WhyUS />
          <Box className="col-lg-8 col-md-8">
            <Box className="feature_item">
              <flex className="row">
                <OurEquipement />
                <OurProfessionals />
                <OurReports />
                <OurPartners />
              </flex>
            </Box>
          </Box>
        </flex>
      </Box>
    </Box2>
  );
};

export default S2;

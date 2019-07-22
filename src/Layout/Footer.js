import React from "react";
import { Facebook, Instagram, Twitter } from "../img";
import "../styles.css";

const Footer = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2 logo">
              <span>Acredité</span> par l'état
            </h2>
            <p>Description d'acredité.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <a href="/">
                <Facebook height="50" width="80" fill="white" />
              </a>

              <a href="/">
                <Twitter height="50" width="80" fill="white" />
              </a>

              <a href="/">
                <Instagram height="50" width="80" fill="white" />
              </a>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Patient</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Avoir resultat
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Creér un compte
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Se connecter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Professionel</h2>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Nos Professionels
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Assistance
                </a>
              </li>
              <li>
                <a href="#" className="py-1 d-block">
                  <span className="ion-ios-arrow-forward mr-3" />
                  Assistance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Service Horaires</h2>
            <div className="opening-hours">
              <p>
                De lundi a dimanche: <span className="mb-3">09:00 a 16:00</span>
              </p>
              <p>
                week-end Service: <span className="mb-3">xxxxxxxxxxxx</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            <i className="icon-heart color-danger" aria-hidden="true" /> <br />
            <a href="https://societe.com" target="_blank">
              Conditions d'utulisations
              <br />
              Politique de confidentialité
              <br />
            </a>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> 2019 Tous
            nous droits réservés{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

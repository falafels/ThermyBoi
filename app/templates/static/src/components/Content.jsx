import React from "react";

import logo from "../assets/logo.svg";
import mainLogo from '../assets/logo_transparent.png';
import { Container } from "reactstrap";

const Content = () => (
  <Container>
    <div className="text-center hero my-7">
      <img className="img-fluid title-img " src={mainLogo} alt="Logo" />
      <h6 className=""> Crowdsourced Thermostat </h6>
    </div>
    <br/>
    <div>
      <p className="lead text-center">
        Welcome to <em>Themaly</em>, if you don't feel satsified with the current temperature during your lecture. You can submit a vote to whatever you'd like! To procede please log in and go to the Voting Page.
      </p>
    </div>
  </Container>
);

export default Content;

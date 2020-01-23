import React from "react";

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
        Welcome to <em>Thermaly</em>, if you don't feel satsified with the current temperature during your lecture, you can submit a temperature vote to whatever you'd like! To proceed please log in and go to the Voting Page.
      </p>
    </div>
  </Container>
);

export default Content;

# Thermaly

Thermaly is an integrated system that calculates what the “ideal” temperature in a McMaster University classroom should be using crowdsourced data. The data will be crowdsourced by Students (Users) currently in the room who indicate their temperature preference by voting on a Web App. The data will be processed on a remote server which will determine the “ideal” temperature for the room. This information will be sent to an electronic board which will then adjust the temperature using the HVAC system it is connected to.

<img src="https://github.com/falafels/ThermyBoi/wiki/screenshot.png" width="750">

## Architecture

<img src="https://github.com/falafels/ThermyBoi/wiki/diagram.png" width="700">

## Technologies Used

1. Web App
    * React
    * Flask (Python)
    * Hosted using GCP's App Engine
    * Auth0 authentication
2. Hardware
    * Raspberry Pi
    * Temperature Sensor

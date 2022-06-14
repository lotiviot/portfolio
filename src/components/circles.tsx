//import React from 'react'
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

import React, { Component } from 'react'

export default class Circles extends Component {

    // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadBigCirclesPreset(engine);
  }

  render() {
    const options = {
      preset: "bigCircles", // also "big-circles" is accepted
    };

    return <Particles options={options} init={this.customInit} />;
  }
}


import React from 'react';

import logo from '../assets/imgs/space_x_logo_bw_centered.png';
import moon from '../assets/imgs/moon.png';

class LaunchesListHeader extends React.Component {
  render() {
    return (
      <div className="launchesListHeader">
        <img src={moon} alt="moon" className="launchesListHeader__moon" />
        <img src={logo} alt="logo spaceX" className="launchesListHeader__logo" />
        <p className="launchesListHeader__text">Launches 2018</p>
      </div>
    );
  }
}

export default LaunchesListHeader;

import React from 'react';

import logo from '../assets/imgs/space_x_logo_bw_centered.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#" className="navbar__link"><span className="arrow arrow--left"><span className="arrow__short"></span></span>go back</a>
        <img src={logo} alt="logo spacex" className="navbar__logo" />
      </div>

    );
  }
}

export default Navbar;

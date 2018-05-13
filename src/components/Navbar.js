import React from 'react';

import PropTypes from 'prop-types';
import logo from '../assets/imgs/space_x_logo_bw_centered.png';


class Navbar extends React.Component {
  static propTypes = {
    onBackClick: PropTypes.func.isRequired,
  };

  render() {
    const { onBackClick } = this.props;

    return (
      <div className="navbar">
        <div className="navbar__link" onClick={onBackClick}><div className="arrow arrow--left arrow--short"><span className="arrow__line"></span></div><span className="navbar__text">go back</span></div>
        <div className="navbar__logo"><img src={logo} alt="logo spacex" width="295" /></div>
        <div className="navbar__emptyBox"></div>
      </div>

    );
  }
}

export default Navbar;

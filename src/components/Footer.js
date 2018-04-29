import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__socialContainer">
          <span className="footer__text">follow spacex &nbsp;|&nbsp; </span>
          <a href="#" className="footer__link">twitter</a>
          <a href="#" className="footer__link">youtube</a>
          <a href="#" className="footer__link">flickr</a>
          <a href="#" className="footer__link">instagram</a>
        </div>
        <div className="footer__rightsContainer">
          <span className="footer__text">2018 space exploration technologies corp.</span>
        </div>
      </div>
    );
  }
}

export default Footer;

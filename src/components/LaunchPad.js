import React from 'react';
import PropTypes from 'prop-types';

class LaunchPad extends React.Component {
  static propTypes = {
    launchPad: PropTypes.object.isRequired,
  };

  render() {
    const { launchPad } = this.props;

    return (
      <div className="exactDetailsWrapper">
        <h4 className="detailsHeader">launch pad</h4>
        <div className="row exactDetails">
          <div className="col-xs-6 exactDetails__itemsList">
            <div className="detailItem">
              <span className="detailItem__property">Name:</span>
              <span className="detailItem__value">{launchPad.full_name}</span>
            </div>
          </div>
          <div className="col-xs-6 exactDetails__itemsList">
            <div className="detailItem">
              <span className="detailItem__property">Location: </span>
              <span className="detailItem__value">{`${launchPad.location.name}, ${launchPad.location.region}`}</span>
            </div>
          </div>
        </div>
        <p>{launchPad.details}</p>
      </div>
    );
  }
}

export default LaunchPad;

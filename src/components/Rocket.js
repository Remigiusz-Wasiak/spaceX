import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

class Rocket extends React.Component {
  static propTypes = {
    rocket: PropTypes.object.isRequired,
  };

  render() {
    const { rocket } = this.props;

    return (
      <div className="exactDetailsWrapper">
        <h4 className="detailsHeader">rocket</h4>
        <div className="exactDetails">
          <div className="exactDetails__itemsList">
            <div className="detailItem">
              <span className="detailItem__property">Name:</span>
              <span className="detailItem__value">{rocket.name}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Company:</span>
              <span className="detailItem__value">{rocket.company}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Height:</span>
              <span className="detailItem__value">{`${rocket.height.meters}m / ${rocket.height.feet}ft`}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Diameter: </span>
              <span className="detailItem__value">{`${rocket.diameter.meters}m / ${rocket.diameter.feet}ft`}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Mass: </span>
              <span className="detailItem__value">{`${rocket.mass.kg}kg / ${rocket.mass.lb}lb`}</span>
            </div>
          </div>
          <div className="exactDetails__itemsList">
            <div className="detailItem">
              <span className="detailItem__property">First flight: </span>
              <span className="detailItem__value">{format(rocket.first_flight, 'DD MMMM YYYY')}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Country: </span>
              <span className="detailItem__value">{rocket.country}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Success rate: </span>
              <span className="detailItem__value">{`${rocket.success_rate_pct}%`}</span>
            </div>
            <div className="detailItem">
              <span className="detailItem__property">Cost per launch: </span>
              <span className="detailItem__value">{`$${rocket.cost_per_launch}`}</span>
            </div>
          </div>
        </div>
        <p>{rocket.description}</p>
      </div>
    );
  }
}

export default Rocket;

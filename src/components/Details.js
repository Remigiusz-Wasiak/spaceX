import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  static propTypes = {
    details: PropTypes.string.isRequired,
  };

  render() {
    const { details } = this.props;

    return (
      <div>
        <h4 className="detailsHeader">details</h4>
        <p>{details}</p>
      </div>
    );
  }
}

export default Details;

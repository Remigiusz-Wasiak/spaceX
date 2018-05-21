import React from 'react';
import PropTypes from 'prop-types';

class FilterButtons extends React.Component {
  static propTypes = {
    rockets: PropTypes.array.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired,
  };

  render() {
    const { rockets, handleFilterChange, currentFilter } = this.props;

    return (
        <div className="filterButtons">
          {/*<span className={`link link--header ${currentFilter === '' ? 'link--active' : ''}`} onClick={() => handleFilterChange('')}>All rockets</span>*/}
          {rockets.map(rocket => <span key={rocket}
                                       className={`link link--header ${currentFilter === rocket ? 'link--active' : ''}`}
                                       onClick={() => handleFilterChange(rocket)}>{rocket}</span>)}
        </div>
    );
  }
}

export default FilterButtons;

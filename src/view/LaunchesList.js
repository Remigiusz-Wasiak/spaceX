import React from 'react';
import PropTypes from 'prop-types';

import LaunchesListHeader from '../components/LaunchesListHeader';
import FilterButtons from '../components/FilterButtons';
import FilteredLaunch from '../components/FilteredLaunch';


class LaunchesList extends React.Component {
  static propTypes = {
    launches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rocketNameFilter: '',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
    const { launches } = this.props;
    const rocketsNames = [];

    launches.forEach((item) => {
      const flight = item;
      if (!rocketsNames.includes(flight.rocket.rocket_name)) {
        rocketsNames.push(flight.rocket.rocket_name);
      }
    });
    return rocketsNames;
  }

  get filteredLaunches() {
    const { rocketNameFilter } = this.state;
    const { launches } = this.props;

    if (!rocketNameFilter) return launches;

    return launches.filter(launch => launch.rocket.rocket_name === rocketNameFilter);
  }

  handleFilterChange(value) {
    this.setState({ rocketNameFilter: value });
  }

  render() {
    const { onLaunchClick } = this.props;
    const { rocketNameFilter } = this.state;
    return (
      <div className="launchesListWrapper">
        <LaunchesListHeader />
        <FilterButtons rockets={this.availableRocketNames} handleFilterChange={this.handleFilterChange} currentFilter={rocketNameFilter} />
        <div className="launchesList">{this.filteredLaunches.map((launch, index) => <FilteredLaunch filteredLaunch={launch} index={index} key={launch.flight_number} onLaunchClick={onLaunchClick} />)}</div>
      </div>
    );
  }
}

export default LaunchesList;

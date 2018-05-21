import React from 'react';
import PropTypes from 'prop-types';
import { MoonLoader } from 'react-spinners';

import LaunchesListHeader from '../components/LaunchesListHeader';
import FilterButtons from '../components/FilterButtons';
import FilteredLaunch from '../components/FilteredLaunch';

class LaunchesList extends React.Component {
  static propTypes = {
    onLaunchClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      availableRocketNames: ['All Rockets', 'Falcon 1', 'Falcon 9', 'Falcon 10', 'Falcon Heavy'],
      filteredLaunches: [],
      rocketNameFilter: 'All Rockets',
      isLoading: false,
      isEmpty: false,
      isError: false,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentWillMount() {
    this.filteredLaunches();
  }

  filteredLaunches(filter = 'all') {
    this.setState({
      isLoading: true,
    });
    let url = 'https://api.spacexdata.com/v2/launches/all';

    if (filter !== 'all') {
      url = `https://api.spacexdata.com/v2/launches?rocket_name=${filter}`;
    }
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        this.setState({
          filteredLaunches: [],
          isError: true,
          isLoading: false,
        });
        throw new Error('Network response was not ok!');
      }).then((data) => {
        if (data && data.length !== 0) {
          this.setState({
            filteredLaunches: data,
            isLoading: false,
            isEmpty: false,
            isError: false,
          });
        } else if (data && data.length === 0) {
          this.setState({
            filteredLaunches: [],
            isEmpty: true,
            isError: false,
            isLoading: false,
          });
        }
      }).catch(e => Promise.reject(e.message));
  }

  handleFilterChange(value) {
    let filter = value;
    this.setState({
      rocketNameFilter: filter,
    });
    if (filter === 'All Rockets') {
      filter = 'all';
    }
    this.filteredLaunches(filter);
  }

  render() {
    const { onLaunchClick } = this.props;
    const {
      rocketNameFilter,
      availableRocketNames,
      filteredLaunches,
      isLoading,
      isEmpty,
      isError,
    } = this.state;
    return (
      <div className="launchesListWrapper">
        <LaunchesListHeader />
        <FilterButtons
          rockets={availableRocketNames}
          handleFilterChange={this.handleFilterChange}
          currentFilter={rocketNameFilter}
        />
        <div className={`launchesList ${isLoading ? 'launchesList--hidden' : ''}`}>
          {filteredLaunches.map((launch, index) => (
            <FilteredLaunch
              filteredLaunch={launch}
              index={index}
              key={launch.flight_number}
              onLaunchClick={onLaunchClick}
            />
          ))}
        </div>
        <div className={`infoContainer ${(isEmpty || isError) && !isLoading ? '' : 'infoContainer--hidden'}`}>
          <h3 className="infoContainer__message">{ isEmpty ? 'Sorry, no launches found' : 'Sorry, there is no server connection'}</h3>
        </div>
        <div className="loaderContainer">
          <MoonLoader
            color="#ccac5b"
            loading={isLoading}
            size={50}
          />
        </div>
      </div>
    );
  }
}

export default LaunchesList;

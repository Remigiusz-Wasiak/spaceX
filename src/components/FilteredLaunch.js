import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

class FilteredLaunch extends React.Component {
  static propTypes = {
    filteredLaunch: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };
  render() {
    const { filteredLaunch, index, onLaunchClick } = this.props;

    return (
      <div className="filteredLaunchWrapper">
        <div onClick={onLaunchClick} className={`filteredLaunch ${index % 2 === 0 ? 'filteredLaunch--left' : 'filteredLaunch--right'}`}>
          <span className={`filteredLaunch__date ${index % 2 === 0 ? '' : 'filteredLaunch__date--right'}`}>{format(filteredLaunch.launch_date_utc, 'DD MMMM YYYY')}</span>
          <div className={`decoratorsContainer ${index % 2 === 0 ? '' : 'decoratorsContainer--right'}`}>
            <div className={`arrow arrow--long ${index % 2 === 0 ? 'arrow--right' : ''}`}>
              <span className="arrow__line"></span>
            </div>
            <span className={`bullet ${index % 2 === 0 ? 'bullet--left' : 'bullet--right'}`}>&bull;</span>
          </div>
          <div className={`filteredLaunch__details ${index % 2 === 0 ? '' : 'filteredLaunch__details--right'}`}>
              Rocket: <span className="itemName"> {filteredLaunch.rocket.rocket_name}&nbsp;</span>&nbsp;|&nbsp;
              Launch Site: <span className="itemName"> {filteredLaunch.launch_site.site_name_long}</span>
          </div>
        </div>
        <div className="emptyBox"></div>
      </div>
    );
  }
}

export default FilteredLaunch;

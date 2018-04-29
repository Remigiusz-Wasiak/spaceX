import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Timer from '../components/Timer';
import Navbar from '../components/Navbar';
import MissionLinks from '../components/MissionLinks';



class LaunchDetails extends React.Component {
  static propTypes = {
    launch: PropTypes.object.isRequired,
    launchSite: PropTypes.object.isRequired,
    rocket: PropTypes.object.isRequired,
  };
  render() {
    const { launch } = this.props;
    return (
      <div>
        <Navbar />
        <div className="row detailsContainer">
          <div className="col-xs-6">
            <div className="launchDate">{format(launch.launch_date_utc, 'DD MMMM YYYY')}</div>
            <div className="launchName">{launch.launch_site.site_name}</div>
            <Timer launchDate={launch.launch_date_utc} />
            <img src={launch.links.mission_patch_small} alt="launch logo" width="180" />
          </div>
          <div className="col-xs-6">
            <div className="right">Right column</div>
          </div>
        </div>
        <MissionLinks redditCampaign={launch.links.reddit_campaign}
                      presskit={launch.links.presskit}
                      video={launch.links.video_link} />
      </div>
    );
  }
}

export default LaunchDetails;

import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Navbar from '../components/Navbar';
import Timer from '../components/Timer';
import MissionLinks from '../components/MissionLinks';
import Details from '../components/Details';
import Rocket from '../components/Rocket';
import LaunchPad from '../components/LaunchPad';


class LaunchDetails extends React.Component {
  static propTypes = {
    launch: PropTypes.object.isRequired,
    launchSite: PropTypes.object.isRequired,
    rocket: PropTypes.object.isRequired,
  };
  render() {
    const { launch, launchSite, rocket } = this.props;
    return (
      <div>
        <Navbar />
        <div className="row detailsContainer">
          <div className="col-sm-6">
            <div className="detailsContainer__launchDate">{format(launch.launch_date_utc, 'DD MMMM YYYY')}</div>
            <h3 className="detailsContainer__launchName">{launch.launch_site.site_name}</h3>
            <Timer launchDate={launch.launch_date_utc} />
            <img className="detailsContainer__launchLogo" src={launch.links.mission_patch_small} alt="launch logo" />
          </div>
          <div className="col-sm-6">
            <div className="detailsContainer__launchDetails">
              <Details details={launch.details} />
              <Rocket rocket={rocket} />
              <LaunchPad launchPad={launchSite} />
            </div>
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

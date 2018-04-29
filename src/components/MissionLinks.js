import React from 'react';
import PropTypes from 'prop-types';

class MissionLinks extends React.Component {
  static propTypes = {
    redditCampaign: PropTypes.string.isRequired,
    presskit: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  };
  render() {
    const { redditCampaign } = this.props;
    const { presskit } = this.props;
    const { video } = this.props;
    return (
      <div className="missionLinks">
        <span className="missionLinks__header">mission links</span>
        <div className="missionLinks__container">
          <a href={redditCampaign} className="link" target="_blank">reddit campaign</a>
          <a href={presskit} className="link" target="_blank">presskit</a>
          <a href={video} className="link" target="_blank">mission video</a>
        </div>
      </div>
    );
  }
}

export default MissionLinks;

import React from 'react';
import PropTypes from 'prop-types';
import differenceInDays from 'date-fns/difference_in_days';
import differenceInHours from 'date-fns/difference_in_hours';
import differenceInMinutes from 'date-fns/difference_in_minutes';

class Timer extends React.Component {
  static propTypes = {
    launchDate: PropTypes.string.isRequired,
  };

  state = {
    currentDate: Date.now(),
  };
  componentWillMount() {
    this.startCountdown();
  }
  componentWillUnmount() {
    clearInterval(this.start);
  }
  startCountdown = () => {
    this.start = setInterval(() => {
      this.setState({
        currentDate: Date.now(),
      });
    }, 60000);
  };

  render() {
    const launchDate = new Date(this.props.launchDate);
    const { currentDate } = this.state;

    return (
      <div className="timer">
        <span>{ Math.abs(differenceInDays(launchDate, currentDate)) + ' days ' + Math.abs(differenceInHours(launchDate, currentDate) % 24) + ' hrs ' + Math.abs(differenceInMinutes(launchDate, currentDate) % 60) }<span>{ differenceInDays(launchDate, currentDate) > 0 ? ' mins to start' : ' mins ago' }</span></span>
      </div>
    );
  }
}

export default Timer;

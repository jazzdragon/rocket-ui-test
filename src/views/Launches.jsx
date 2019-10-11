import React, { useState, useEffect } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchesCollection, launchCollection }) => {
  const [expnadedLaunch, setExpandedLaunch] = useState()

  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }, [fetchLaunchesIfNeeded])

  if (!launchCollection || launchCollection.fetching) {
    return <div> LOADING </div>;
  }

  if (!launchCollection.launches.length) {
    return <div> NO DATA </div>;
  }

  const handleLaunchClick = (flightNumber) => {
    setExpandedLaunch(flightNumber)
  }

  const launches = launchCollection.launches.map((launch) =>
      <Launch
        key={ launch.flight_number }
        launch={launch}
        isExpanded={ expnadedLaunch === launch.flight_number }
        onClick={ () => handleLaunchClick(launch.flight_number)}
      />
  );

  return (
    <div>
      <h2> SpaceX launches </h2>
      <ul>
        {launches}
      </ul>
    </div>
  );
}

export default ConnectedView(LaunchesView, 'launches');

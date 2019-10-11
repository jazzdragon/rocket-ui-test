import React, { useState, useEffect } from 'react';
import ConnectedView from './ConnectedView';
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from '../components/Launch';

const LaunchesView = ({ dispatch, launchesCollection, launchCollection }) => {
  useEffect(() => {
    fetchLaunchesIfNeeded({ dispatch, launchesCollection });
  }, [fetchLaunchesIfNeeded])

  if (!launchCollection || launchCollection.fetching) {
    return <div> LOADING </div>;
  }

  if (!launchCollection.launches.length) {
    return <div> NO DATA </div>;
  }

  const launches = launchCollection.launches.map((launch) =>
      <Launch key={ launch.flight_number } launch={launch} />
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

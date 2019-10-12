import ApiService from '../services/ApiService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET'
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: response.data
});

export const fetchRocket = (dispatch, rocketId) => {
  dispatch(requestRocket());
  return ApiService.get(`rockets/${rocketId}`).then(response => dispatch(receiveRocket(response)));
};

const shouldFetchRocket = rocketInfo => !rocketInfo || !rocketInfo.fetching;

export const fetchRocketIfNeeded = ({ dispatch, rocketInfo, rocketId }) =>
  shouldFetchRocket(rocketInfo) && fetchRocket(dispatch, rocketId);

export const RESET_STATE = 'RESET_STATE';

export const FETCH_PLAYER_ONE_DATA_SUCCESS = 'FETCH_PLAYER_ONE_DATA_SUCCESS';
export const FETCH_PLAYERS_DATA_SUCCESS = 'FETCH_PLAYER_DATA_SUCCESS';
export const FETCH_GAME_DATA_SUCCESS = 'FETCH_GAME_DATA_SUCCESS';
export const FETCH_ITEMS_DATA_SUCCESS = 'FETCH_ITEMS_DATA_SUCCESS';

export const SET_LAST_API_RESPONSE = 'SET_LAST_API_RESPONSE';
export const SET_LAST_API_RESPONSE_VISIBILITY = 'SET_LAST_API_RESPONSE_VISIBILITY';
export const SET_STATE_ENTITIES_VISIBILITY = 'SET_STATE_ENTITIES_VISIBILITY';
export const SET_DENORMALIZED_VISIBILITY = 'SET_DENORMALIZED_VISIBILITY';

export const resetState = () => ({
    type: RESET_STATE,
});

export const fetchPlayerOneDataSuccess = (data) => ({
  type: FETCH_PLAYER_ONE_DATA_SUCCESS,
  data,
});

export const fetchPlayersDataSuccess = (data) => ({
  type: FETCH_PLAYERS_DATA_SUCCESS,
  data,
});

export const fetchGameDataSuccess = (data) => ({
    type: FETCH_GAME_DATA_SUCCESS,
    data,
});

export const fetchItemsDataSuccess = (data) => ({
  type: FETCH_ITEMS_DATA_SUCCESS,
  data,
});

export const setLastAPIResponse = (data) => ({
    type: SET_LAST_API_RESPONSE,
    data,
});

export const setLastApiResponseVisiblity = visibility => ({
    type: SET_LAST_API_RESPONSE_VISIBILITY,
    visibility,
});

export const setStateEntitiesVisiblity = visibility => ({
    type: SET_STATE_ENTITIES_VISIBILITY,
    visibility,
});

export const setDenormalizedVisiblity = visibility => ({
  type: SET_DENORMALIZED_VISIBILITY,
  visibility,
});
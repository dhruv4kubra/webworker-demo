import _ from 'lodash';
import { combineReducers } from 'redux';

import {
  RESET_STATE,
  FETCH_GAME_DATA_SUCCESS,
  FETCH_PLAYERS_DATA_SUCCESS,
  FETCH_PLAYER_ONE_DATA_SUCCESS,
} from '../../actions';

const initialState = {
  byId: {},
  allIds: [],
};

function players(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYER_ONE_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.players,
        },
        allIds: _.uniq([
          ...state.allIds,
          action.data.result,
        ]),
      });
    case FETCH_PLAYERS_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.players,
        },
        allIds: _.uniq([
          ...state.allIds,
          ...action.data.result,
        ]),
      });
    case FETCH_GAME_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.players,
        },
        allIds: _.uniq([
          ...state.allIds,
          ...action.data.result.loggedInPlayers,
        ]),
      });
    case RESET_STATE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

function items(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYER_ONE_DATA_SUCCESS:
    case FETCH_PLAYERS_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.items,
        },
        allIds: _.uniq([
          ...state.allIds,
          ...Object.keys(action.data.entities.items),
        ]),
      });
    case FETCH_GAME_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.items,
        },
        allIds: _.uniq([
          ...state.allIds,
          ...Object.keys(action.data.entities.items),
        ]),
      });
    case RESET_STATE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

function monsters(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAME_DATA_SUCCESS:
      return Object.assign({}, {
        byId: {
          ...state.byId,
          ...action.data.entities.monsters,
        },
        allIds: _.uniq([
          ...state.allIds,
          ...action.data.result.monsters,
        ]),
      });
    case RESET_STATE:
      return Object.assign({}, initialState);
    default:
      return state;
  }
}

export default combineReducers({
  players,
  items,
  monsters,
})
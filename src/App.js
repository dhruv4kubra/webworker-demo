import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { normalize, denormalize } from 'normalizr';
import './App.css';
import MockAPIService from './mock/MockAPIService';
import schemas from './schemas';

import {
  resetState,
  fetchPlayerOneDataSuccess,
  fetchPlayersDataSuccess,
  fetchGameDataSuccess,
  fetchItemsDataSuccess,
  setLastAPIResponse,
  setLastApiResponseVisiblity,
  setStateEntitiesVisiblity,
  setDenormalizedVisiblity,
} from './actions';

class App extends Component {
  render() {
    const { state, dispatch } = this.props;
    const {
      showlastAPIResponse,
      showStateEntities,
      showDenormalized,
    } = state.ui;

    if(state.entities.players.byId[1]){

    }
    /**
     * This function to simulate API calls and dispatch success actions
     */
    const handleGetDataClick = (dataType) => () => {

      switch (dataType) {
        case 'playerOne':
          MockAPIService.getPlayerOneData().then(
            (data) => {
              const normalizedData = normalize(data, schemas.player);
              console.log('/api/players/1 (api): ', data);
              console.log('/api/players/1 (normalized): ', normalizedData);
              dispatch(setLastAPIResponse(data));
              dispatch(fetchPlayerOneDataSuccess(normalizedData));
            }
          );
          break;
        case 'players':
          MockAPIService.getPlayersData().then(
            (data) => {
              const normalizedData = normalize(data, schemas.arrayOfPlayers);
              console.log('/api/players/ (api): ', data);
              console.log('/api/players/ (normalized): ', normalizedData);
              dispatch(setLastAPIResponse(data));
              dispatch(fetchPlayersDataSuccess(normalizedData));
            }
          );
          break;
        case 'game':
          MockAPIService.getGameData().then(
            (data) => {
              const normalizedData = normalize(data, schemas.game);
              console.log('/api/games/1 (api): ', data);
              console.log('/api/games/1 (normalized): ', normalizedData);
              dispatch(setLastAPIResponse(data));
              dispatch(fetchGameDataSuccess(normalizedData));
            }
          );
          break;
        case 'items':
          MockAPIService.getItemsData().then(
            (data) => {
              const normalizedData = normalize(data, schemas.itemUnionSchema);
              console.log('/api/items/ (api): ', data);
              console.log('/api/items/ (normalized): ', normalizedData);
              dispatch(setLastAPIResponse(data));
              dispatch(fetchItemsDataSuccess(normalizedData));
            }
          );
            break;
        default:
          return null;
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              normalizr
              <button type="button" className="btn btn-danger pull-right" onClick={() => dispatch(resetState())}>Reset State</button>
            </h1>
            <div className="button-group">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                  API Request
                <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li onClick={handleGetDataClick('playerOne')} role="button"><a href="#">/api/players/1</a></li>
                  <li onClick={handleGetDataClick('players')} role="button"><a href="#">/api/players</a></li>
                  <li onClick={handleGetDataClick('game')} role="button"><a href="#">/api/game/1</a></li>
                  {/* <li onClick={handleGetDataClick('items')} role="button"><a href="#">/api/items</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h5>
              Last API Response
              <a className="pull-right" onClick={() => dispatch(setLastApiResponseVisiblity(!showlastAPIResponse))}>
                {
                  showlastAPIResponse ?
                    'hide' :
                    'show'
                }
              </a>
            </h5>
            <pre>
                {
                  showlastAPIResponse ?
                    JSON.stringify(state.ui.lastAPIResponse, null, 2) :
                    '[hidden]'
                }

            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h5>
              state.entities
              <a className="pull-right" onClick={() => dispatch(setStateEntitiesVisiblity(!showStateEntities))}>
                {
                  showStateEntities ?
                    'hide' :
                    'show'
                }
              </a>
            </h5>
            <pre>
                {
                  showStateEntities ?
                  JSON.stringify(Object.assign({}, state, { ui: '...' }), null, 2) :
                    '[hidden]'
                }
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h5>
              denormalized players:
              <a className="pull-right" onClick={() => dispatch(setDenormalizedVisiblity(!showDenormalized))}>
                {
                  showDenormalized ?
                    'hide' :
                    'show'
                }
              </a>
            </h5>
            <pre>
                {
                  showDenormalized ?
                  JSON.stringify(
                    denormalize(
                      [ ...state.entities.players.allIds ],
                      schemas.arrayOfPlayers,
                      {
                        players: state.entities.players.byId,
                        items: state.entities.items.byId,
                      }),
                    null,
                    2
                  ) :
                    '[hidden]'
                }
            </pre>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h5> Some Resources: </h5>
            <ul>
              <li>
                <a href="https://github.com/paularmstrong/normalizr/tree/master/docs" target="_new">
                  Normaliz Docs
                </a>
              </li>
              <li>
                <a href="https://egghead.io/lessons/javascript-redux-normalizing-api-responses-with-normalizr" target="_new">
                  EggHead IO Video
                </a>
              </li>
              <li>
                <a href="https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html" target="_new">
                  Redux Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(App);

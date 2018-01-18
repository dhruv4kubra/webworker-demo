import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import AppWorker from './app.worker.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: 0,
    };

    this._worker = new AppWorker();
    this._worker.addEventListener('message', (e) => {
      this.setState({
        value: e.data,
      });
      window.setTimeout(() => {
        this._worker.postMessage(this.state.value);
      }, 1000);
    });
    window.setTimeout(() => {
      this._worker.postMessage(this.state.value);
    }, 1000);

  }

  render() {
    /**
     * This function to simulate API calls and dispatch success actions
     */
    return (
      <div className="row">
          <div className="col-xs-12">
            <h5> Value being updated every second by worker.</h5>
            <ul>
              <li>
                {this.state.value}
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = (state) => ({
  state: state,
});

export default App;

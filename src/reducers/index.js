import { combineReducers } from 'redux';
import ui from './ui';
import entities from './entities/index.js';

const rootReducer = combineReducers({
    ui,
    entities
});

export default rootReducer;
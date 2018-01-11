import {
    RESET_STATE,
    SET_LAST_API_RESPONSE,
    SET_LAST_API_RESPONSE_VISIBILITY,
    SET_STATE_ENTITIES_VISIBILITY,
    SET_DENORMALIZED_VISIBILITY,
} from '../actions';

const initialState = {
    lastAPIResponse: null,
    showlastAPIResponse: true,
    showStateEntities: true,
    showDenormalized: false,
};


function uiReducer(state = initialState, action){
    switch(action.type){
        case SET_LAST_API_RESPONSE_VISIBILITY:
          return Object.assign({}, state, { showlastAPIResponse: action.visibility });
        case SET_STATE_ENTITIES_VISIBILITY:
          return Object.assign({}, state, { showStateEntities: action.visibility });
        case SET_DENORMALIZED_VISIBILITY:
          return Object.assign({}, state, { showDenormalized: action.visibility });
        case SET_LAST_API_RESPONSE:
            return Object.assign({}, state, { lastAPIResponse: action.data });
        case RESET_STATE:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export default uiReducer;
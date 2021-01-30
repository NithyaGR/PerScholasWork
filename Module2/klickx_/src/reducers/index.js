// my combined reducers are going to here
// import other reducers and your { combineReducers } from 'redux'

import { combineReducers } from 'redux';
import klickx_reducers from './kiickx_reducers';

const rootReducer = combineReducers({
    users : klickx_reducers
})


export default rootReducer;
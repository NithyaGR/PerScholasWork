// my combined reducers are going to here
// import other reducers and your { combineReducers } from 'redux'

import { combineReducers } from 'redux';
import klickx_reducers from './kiickx_reducers';
import registrationReducers from './registrationReducers';


const rootReducer = combineReducers({
    users: klickx_reducers,
    pictures: klickx_reducers,
    users: registrationReducers
})


export default rootReducer;
// my combined reducers are going to here
// import other reducers and your { combineReducers } from 'redux'

import { combineReducers } from 'redux';
import imageActionsReducers from './imageActionsReducers';
import klickx_reducers from './klickx_reducers';



const rootReducer = combineReducers({
    users1 : klickx_reducers,//for registering the user and then login and log out
    pictures: imageActionsReducers //picture related actions
})


export default rootReducer;
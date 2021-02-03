// const { initialState } = require("./registrationReducers");

import users from './users.js';
import pictures from './pictureData.js';
console.log(users);

export const initialState = {
    
    pictures: pictures,
    userLiked: false,
    Comments: [],
    userFavorite: [],
    isClicked: false,
    selectedImage: '',
    isOpen : false
    
}
const imageActionReducers = (state= initialState, action) => {

    switch(action.type) {
        case 'ADD_COMMENT' :
            console.log("Adding the comment");
            console.log(action.payload);
            return state
            // return{
            //     pictures[].comments: [...state.pictures[].comments, action.payload];
            // }
        case 'LIKE_IMG' :
            console.log("like image");
            console.log(action.payload);
            return state    
        case 'ADD_TO_FAV':
            console.log("Adding the favorites");
            console.log(action.payload);
            return state
        case 'DELETE_COMMENT' :
            console.log("Deleting the comment");
            console.log(action.payload);
            return state
        case 'IMG_CLICKED'  :
            console.log("IMG Clicked Action");
            console.log(action.payload);
            
            return {
                ...state,
                isClicked : true,
                selectedImage : state.pictures.filter ( (picture) => action.payload === picture.name)[0]
              };
        case 'TOGGLE_POPUP' :
            console.log("Toggle PopUp Action");
            console.log(action.payload);
            return {
                ...state,
                isOpen : action.payload
            }      
        default: 
            return state        

    }

}
export default imageActionReducers
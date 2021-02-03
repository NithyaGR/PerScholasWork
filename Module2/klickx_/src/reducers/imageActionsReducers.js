// const { initialState } = require("./registrationReducers");

import users from './users.js';
import pictures from './pictureData.js';
console.log(users);

export const initialState = {
    
    pictures: pictures,
    userLiked: false,
    Comments: [],
    userFavorites: [],
    isClicked: false,
    selectedImage: '',
    isOpen : false,
    isFavorite: true
    
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
            return {
                ...state,
                userFavorites: [action.payload, ...state.userFavorites] // check this please
            }
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

        case 'REMOVE_FAVORITE' :
            console.log('Deleting from favorites list')      
            console.log(action.payload);
            return { // returning a copy of orignal state
                ...state, //copying the original state
                //isFavorite: false,
                userFavorites: state.userFavorites.filter(fav => fav.name !== action.payload) 
                                               // returns a new filtered fav array
                  
            }
        default: 
            return state        

    }

}
export default imageActionReducers
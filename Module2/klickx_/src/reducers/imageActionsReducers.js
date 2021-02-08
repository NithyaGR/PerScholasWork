// const { initialState } = require("./registrationReducers");

import users from './users.js';
import pictures from './pictureData.js';
import { ADD_COMMENT, ADD_TO_FAV, DELETE_COMMENT, IMG_CLICKED, LIKE_IMG, UNLIKE_IMG ,REMOVE_FAVORITE, TOGGLE_POPUP, WANT_TO_ADD_COMMENT, MAKE_PROFILE_PICTURE } from '../actions/ImageActions.js';
console.log(users);

export const initialState = {
    
    pictures: pictures,
    userLiked: false,
    Comments: [],
    userFavorites: [],
    likedList: [],
    isClicked: false,
    selectedImage: '',
    isOpen : false,
    isFavorite: true,
    commentPosted: '',
    wantToAddComment: false,
    profilePicture:'',
    profilePictureSelected: false
    // commentDeleted: false
    
}
const imageActionsReducers = (state= initialState, action) => {

    switch(action.type) {
        case ADD_COMMENT :
            var d = new Date();
            console.log("Adding the comment @ time: "+d);
            console.log(action.payload);
            console.log(action.payload.comment);
            console.log(action.payload.by);
            return {
                ...state,
                Comments: [action.payload.comment, ...state.Comments],
                selectedImage: {
                    ...state.selectedImage,
                    commentPosted: true,
                    comments: [                       
                        {
                            comment: action.payload.comment,
                            by: action.payload.by
                         },
                         ...state.selectedImage.comments

                        ]
                }
            } 

        case LIKE_IMG :
            console.log("like image");
            console.log(action.payload);
            // console.log(state.selectedImage);
            let likedTime = new Date();
            console.log(likedTime);
            return {
                ...state,
                userLiked : true,
                likedList: [action.payload, ...state.likedList],
                selectedImage: {
                    ...state.selectedImage,
                    likes: Number(action.payload.likes)+1,
                    liked: true,
                    commentPosted: false,
                    likedAtTime: likedTime
                }
            }   
        case UNLIKE_IMG :
            console.log("unlike image");
            console.log(action.payload);  
            let filteredLikedList = state.likedList.filter(item => item.id !== action.payload.id);
            console.log(filteredLikedList);
            let indexValue = state.likedList.indexOf(action.payload);
            //state.likedList.splice(indexValue,1);
            //console.log(state.likedList);

            return {
                ...state,
                userLiked : false,
                //likedList: filteredLikedList,
                likedList: state.likedList.splice(indexValue,1),
                selectedImage: {
                    ...state.selectedImage,
                    likes: Number(action.payload.likes)-1,
                    liked: false
                }

            }
        case WANT_TO_ADD_COMMENT :
            console.log('wantToAddComment');
            console.log(action.payload);
            return {
                ...state,
                selectedImage: {
                    ...state.selectedImage,
                    wantToAddComment: true
                }

            }
        case ADD_TO_FAV :
            console.log("Adding the favorites");
            console.log(action.payload);
            return {
                ...state,
                userFavorites: [action.payload, ...state.userFavorites], // check this please
                commentPosted: false
            }
        case DELETE_COMMENT :
            console.log("Deleting the comment");
            console.log(action.payload);
            console.log(action.payload.[0].by);
            // let commentsArr = state.selectedImage.comments;
            // console.log(commentsArr[0].comment);
            // console.log(commentsArr[0].by);
            //console.log(state.selectedImage.comments.filter(item => item.by != action.payload.[0].by));
            return {
                ...state,
                Comments: state.Comments.filter(comment => comment !== action.payload.comment) ,
                selectedImage: {
                    ...state.selectedImage,
                    commentPosted: false,
                    commentDeleted: true,
                    comments: [
                        state.selectedImage.comments.filter(item => item.by != action.payload.[0].by)
                       
                        ]

                }
            }

        case IMG_CLICKED  :
            console.log("IMG Clicked Action");
            console.log(action.payload);
            
            return {
                ...state,
                isClicked : true,
                isOpen : true,
                selectedImage : state.pictures.filter ( (picture) => action.payload === picture.name)[0]
              };
        case TOGGLE_POPUP :
            console.log("Toggle PopUp Action");
            console.log(action.payload);
            return {
                ...state,
                isOpen : action.payload,
                isClicked : false
            }  

        case REMOVE_FAVORITE :
            console.log('Deleting from favorites list')      
            console.log(action.payload);
            return { // returning a copy of original state
                ...state, //copying the original state
                //isFavorite: false,
                userFavorites: state.userFavorites.filter(fav => fav.name !== action.payload) 
                                               // returns a new filtered fav array
                  
            }
        case MAKE_PROFILE_PICTURE :
            console.log('Profile Picture')      
            console.log(action.payload);    
            return {
                ...state,
                profilePicture: action.payload,
                profilePictureSelected: true
            }
        default: 
            return state        

    }

}
export default imageActionsReducers
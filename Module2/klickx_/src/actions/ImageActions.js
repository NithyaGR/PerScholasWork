//import the corresponding js component file ? 

// CONSTANT FOR AN ACTION (MAKES OUR LIFE EASIER)
export const ADD_COMMENT = 'ADD_COMMENT'
export const LIKE_IMG = 'LIKE_IMG'
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const IMG_CLICKED = 'IMG_CLICKED'
export const TOGGLE_POPUP = 'TOGGLE_POPUP'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const WANT_TO_ADD_COMMENT = 'WANT_TO_ADD_COMMENT'

// ACTION CREATOR 
export const addComment = (data) => ({
    type: ADD_COMMENT,
    payload: data
})

export const likeImage = (data) => ({
    type: LIKE_IMG,
    payload: data
})

export const addToFavorites= (data) => ({
    type: ADD_TO_FAV,
    payload: data
})
export const deleteComment = (data) => ({
    type: DELETE_COMMENT,
    payload: data
})
export const imageClicked = (data) => ({
    type: IMG_CLICKED,
    payload: data
})
export const togglePopUp = (data) => ({
    type: TOGGLE_POPUP,
    payload: data
})
export const removeFavorite = (data) => ({
    type: REMOVE_FAVORITE,
    payload: data
})
export const wantToAddComment = (data) => ({
    type: WANT_TO_ADD_COMMENT,
    payload: data
})
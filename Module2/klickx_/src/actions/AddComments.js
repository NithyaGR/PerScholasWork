//import the corresponding js component file ? 

// CONSTANT FOR AN ACTION (MAKES OUR LIFE EASIER)
export const ADD_COMMENT = 'ADD_COMMENT'

// ACTION CREATOR 
export const addComment = (item) => ({
    type: ADD_COMMENT,
    payload: item
})
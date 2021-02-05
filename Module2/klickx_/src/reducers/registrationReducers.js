import users from './users.js';

console.log(users);

export const initialState = {
    users : users,
    newUser: {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        favorites: [],
        pictures: [],
        profilePictures: '',
        isRegistered: false
    },
    isRegistered: false,
    isLoggedIn: false
   
}
const registrationReducers = (state = initialState, action) => {

    switch(action.type) {
        case 'REGISTER_USER' :
                console.log('Registering the User');
                localStorage.setItem("name", JSON.stringify(action.payload.name));  
                    return {
                        ...state,
                        newUser: {
                            ...state.newUser,
                            name: action.payload.name,
                            email: action.payload.email,
                            password: action.payload.password,
                            isRegistered: true   
                        },
                        isRegistered: true
                    }
        default: 
            return state    
    }
}
export default registrationReducers;
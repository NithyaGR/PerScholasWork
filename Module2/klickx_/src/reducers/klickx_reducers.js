// store the initial state, and describe how the actions change the state
// import your action here
import { LOGIN_USER, LOGOUT_USER } from '../actions/LoginLogoutAction';
import { REGISTER_USER } from '../actions/RegisterUserAction';
import users from './users.js';
import pictures from './pictureData.js';
console.log(users);

export const initialState = {
    users : users,
    //pictures: pictures, checking
    newUser: {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        favorites: [],
        pictures: [],
        profilePictures: '',
        isRegistered: false
    }
    
}

const klickx_reducers = (state = initialState, action) => {
    switch(action.type) {   
            case LOGIN_USER :
                console.log('inside login user');
                console.log(action.payload);
                // localStorage.setItem("name", JSON.stringify(action.payload.name));
                // localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn));
                return {
                        ...state,       
                        newUser: {
                            ...state.newUser,
                            email: action.payload.email,
                            isLoggedIn: true
                        }        
                    }   
            
            case LOGOUT_USER :
                console.log('logging out');
                localStorage.clear();
                return initialState    
            
            case REGISTER_USER :
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
                        }                                
                }        
            default: 
                return state    

    }
}
export default klickx_reducers; 
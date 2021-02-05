// store the initial state, and describe how the actions change the state
// import your action here
import { LOGIN_USER, LOGOUT_USER } from '../actions/LoginLogoutAction';
import users from './users.js';
import pictures from './pictureData.js';
console.log(users);

export const initialState = {
    users : users,
    pictures: pictures,
    name: '',
    isLoggedIn: false,
    currentUser: {
        name: '',
        isLoggedIn: false,
        email: '',
        password: '',
        favorites: [],
        picture: [],
        profilePictures: '',
        isRegistered: true
    }
    
}

const klickx_reducers = (state = initialState, action) => {
    switch(action.type) {   
            case 'LOGIN_USER' :
                console.log('inside login user');
                console.log(action.payload);
                // localStorage.setItem("name", JSON.stringify(action.payload.name));
                // localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn));
                return {
                    users:
                    {
                        ...state,       
	                    users: { 		
		                        isLoggedIn : true
                        },
                        name: action.payload.name,
                        isLoggedIn: true,
                        currentUser: {
                            name: action.payload.name,
                            isLoggedIn: true
                        }
                        
                    }
                }
            case 'LOGOUT_USER' :
                console.log('logging out');
                    localStorage.clear();
                    return {
                      ...state,
                      users: {
                                isLoggedIn : false
                      },
                      name: null,
                      isLoggedIn: false,
                      currentUser: {
                        name: '',
                        isLoggedIn: false
                    }
                    };
           
                
        default: 
            return state    

    }
}
export default klickx_reducers; 
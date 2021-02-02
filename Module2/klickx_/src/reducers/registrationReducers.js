import users from './users.js';

console.log(users);

export const initialState = {
    users : users,
    new_user: {
        name: '',
        email: '',
        password: '',
        isLoggedIn: false,
        favorites: [],
        picture: [],
        profilePicture: ''
    },
    isRegistered: false
   
}
const registrationReducers = (state = {}, action) => {

    switch(action.type) {
        case 'REGISTER_USER' :
                localStorage.setItem("name", JSON.stringify(action.payload.name));  
                return {
                    users:
                        {
                            ...state,       
                            new_user: { 
                                name: action.payload.name,
                                email: action.payload.email,
                                password: action.payload.password	
                            
                            },
                            isRegistered: true          
                        }
                } 
        default: 
            return state    
    }
}
export default registrationReducers;
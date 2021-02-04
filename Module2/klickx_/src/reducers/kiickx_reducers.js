// store the initial state, and describe how the actions change the state
// import your action here
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
        isLoggedIn: false
    }
    
}


const klickx_reducers = (state = initialState, action) => {
    switch(action.type) {   
            case 'LOGIN_USER' :
                console.log('inside login user');
                console.log(action.payload);
                localStorage.setItem("name", JSON.stringify(action.payload.name));
                localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn));
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
class AuthenticationUser{
    registerSuccessfulLogin(userName, password){
        console.log("Registration Successful");
        sessionStorage.setItem('authenticatedUser', userName)
    }
    logout(){
        console.log("Removed the user");
        sessionStorage.removeItem('authenticatedUser')
    }
}
export default new AuthenticationUser();
/*
we can call this method in our login function after the user entered valid credentials to
register
*/

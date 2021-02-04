import React, { Component } from 'react';
import { connect } from 'react-redux';
import users from '../../reducers/users';
import pictures from '../../reducers/pictureData';
import './ProfilePage.css'

class ProfilePage extends Component {

    state = {
        users: users,
        pictures: pictures,
        userFavorites: [],
        currentUser: ''
    }
    
    render(){
        console.log('profile picture');
        console.log(this.props.currentUser);
    return (
       
            <div className='ProfilePage'>
                <div className='profile'>
                    <p> Display the profile details here</p>
                    <h4>{this.props.users}</h4>
                </div>
                <div className='image1'>
                    <img src=''></img>
                    <div className='image1Data'>
                        <h4>Display the likes and comments here</h4>
                    </div>
                </div>
                <div className='image2'>
                    <img src=''></img>
                    <div className='image2Data'>
                        <h4>Display the likes and comments here</h4>
                    </div>
                </div>
                
            </div>
        
    )
}
}
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    user: state.users.users,
    picture: state.pictures.pictures,
    currentUser: state.users.newUser
  })

  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "register"
//   const mapDispatchToProps = (dispatch) => ({
//     updateProfileInfo : profile => dispatch(Edit(profile))


//   })
export default connect(mapStateToProps)(ProfilePage);
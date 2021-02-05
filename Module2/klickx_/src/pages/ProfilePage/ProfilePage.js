import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfilePage.css'

class ProfilePage extends Component {

    render(){
        console.log('profile page');
        console.log(this.props);
        console.log(this.props.currentUser);
        console.log(this.state);
    return (
       
            <div className='ProfilePage'>
                <div className='profile'>
                     <h3> Hi {this.props.currentUser.name} </h3>
                     <h4>Your Profile Details</h4>
                    <h4>{this.props.currentUser.name}</h4>
                    <h4>{this.props.currentUser.email}</h4>
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
    currentUser: state.users.newUser,
    userFavorites: state.pictures.userFavorites,
    likedPictures: state.pictures.likedList
  })

  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "register"
//   const mapDispatchToProps = (dispatch) => ({
//     updateProfileInfo : profile => dispatch(Edit(profile))
//   })
export default connect(mapStateToProps)(ProfilePage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProfilePage.css'

class ProfilePage extends Component {

    render(){
        console.log('profile page');
        console.log(this.props);
        console.log(this.props.newUser);
        console.log(this.props.likedPictures[0]);
        // console.log(this.props.likedPictures.comments);
        // const sortedLikedPictures = this.props.likedPictures.sort((picObj1, picObj2) => picObj1. - picObj2.likedAtTime);
        // console.log(sortedLikedPictures[0]);

        console.log(this.props.profilePicture.name);
        console.log(this.props.profilePicture.source);
        const reqImage = this.props.likedPictures.reduce((prev, current) => 
             (prev.comments.length > current.comments.length) ? prev : current);
             console.log(reqImage.name);
    return (
       
            <div className='profilePage'>
                <div className='profile'>
                    <div className='profileData'>
                     <h3> Hi {this.props.newUser.name} </h3>
                     <h4>Your Profile Details</h4>
                    <h4>{this.props.newUser.name}</h4>
                    <h4>{this.props.newUser.email}</h4>
                    </div>
                    <div className='profileImage'>
         
                        <img src={this.props.profilePicture.source} alt={this.props.profilePicture.name}/>
                    </div>
                </div>
                <br />
                <div className='imageSection'>
                <div className='image1'>
                {/* {this.props.likedPictures.map(({id, name, source}) => <div key={id} ><img id={id} src={source} alt={name} /></div>)} */}
                  <div><img id={this.props.likedPictures[0].id} src={this.props.likedPictures[0].source} alt={this.props.likedPictures[0].name} /></div>  
                    <div className='image1Data'>
                        <ul className='noBulletList'>
                        {this.props.likedPictures[0].comments.map((comment, index)=> {
                            return(
                              <div> <li key={index}> {comment.comment}</li><br /> </div>
                        )} 
                        )}
                        </ul>
                    </div>
                </div>
                <div className='image2'>
                   <div> <img id={reqImage.id} src={reqImage.source} alt={reqImage.name} /> </div>
                    <div className='image2Data'>
                    <ul className='noBulletList'>
                        {reqImage.comments.map((comment, index)=> {
                            return(
                              <div> <li key={index}> {comment.comment}</li><br /> </div>
                        )} 
                        )}
                        </ul>
                    </div>
                </div>
                </div>
                
            </div>
        
    )
}
}
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    newUser: state.users1.newUser,
    userFavorites: state.pictures.userFavorites,
    likedPictures: state.pictures.likedList,
    profilePicture: state.pictures.profilePicture
  })

  // Adds a prop called "changeLoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "register"
//   const mapDispatchToProps = (dispatch) => ({
//     updateProfileInfo : profile => dispatch(Edit(profile))
//   })
export default connect(mapStateToProps)(ProfilePage);
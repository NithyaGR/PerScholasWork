import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, likeImage, addToFavorites, deleteComment, togglePopUp, wantToAddComment, makeProfilePicture } from '../../actions/ImageActions';
import './Images.css';

import pictures from '../../reducers/pictureData';
import users from '../../reducers/users';



class Images extends Component { 
    
    state = {
        pictures: pictures,
        userLiked: false,
        Comments: [],
        userFavorite: [],
        isClicked: false,
        isOpen: '',
        selectedImage: {
            liked: false,
            commentPosted: false,
            wantToAddComment: false,
            comment: ''

        }
    }
    handleClick = (e) => {
        console.log('onclick- function');
        console.log(e.target.id);
        if(e.target.id === 'fav'){
            //call actions of fav 
            this.props.addToMyFavorites(this.props.selectedImage)
            alert('Added to your favorites!!!')
        }
        if(e.target.id === 'like'){
            console.log(users.length);
            let totalNumberOfUsers = users.length + 1 // existing users plus the new registered user
            console.log(this.props.likes);
            let newNumberOfLikes = Number(this.props.likes)+1;
            if(this.props.selectedImage.likes < totalNumberOfUsers) {
                this.props.likeThisImage(this.props.selectedImage);
                
            }
            else {
                alert('Already Liked the image!!');
            }
        }
        if(e.target.id === 'btnPost'){
            console.log(e.target.id);
            this.props.wantToAddNewComment(true);
        }
        if(e.target.id === 'btnDelete'){
            console.log(e.target.id);
            //this.props.wantToAddNewComment(false);
        }
        if(e.target.id === 'PP'){
            this.props.makeThisProfilePicture(this.props.selectedImage);
        }
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e ) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('handleSubmit');
        var newDate = new Date()
        console.log(newDate);
        let newComment = document.getElementById('textPostComment').value;
        console.log(newComment);
        let newCommentObject = { 
            comment: newComment,
            by: localStorage.getItem('name')
         }
         console.log(newCommentObject);
        this.props.addNewComment(newCommentObject);

    }
    handleClose = (e) =>{
        console.log('clicking the close button');
        this.props.togglePopUpModal(false);
    }

    render(){
        console.log('Rendering Images ',this.props.selectedImage);
        return (
            // <div className='container'>
            <div className='popup-box'>
                <div className='box'>
                <div className='imageContainer'>
                <span className="close-icon" onClick={this.handleClose}>x</span>
                <img id={this.props.selectedImage.id} src={this.props.selectedImage.source} alt={this.props.selectedImage.name} />
                </div>
                <div className='btnContainer' >
                    <button id='fav' onClick={this.handleClick}>Add To Favorites </button>
                    <button id='PP' onClick={this.handleClick}>Profile Picture</button>
                    <button id='totalLikes'>Total Likes </button>
                    <button id='totalLikesValue'> {this.props.selectedImage.likes} </button>
                    <button id='like' onClick={this.handleClick}>{this.props.selectedImage.liked ? 'Unlike' : 'Like'}</button > 
                    { this.props.selectedImage.liked  ? <img id='likedIcon' src='/likedIcon.png' alt='likedImage'/> : ''}                   
                </div>
                <div className='commentsContainer' >
                    <div className='commentsList'>
                        <label> Comments </label>
                    <ul className='noBulletList'>
                        {this.props.selectedImage.comments.map((comment, index)=> {
                            return(
                              <div> <li key={index}> {comment.comment}</li><br /> </div>
                        )} 
                        )}
                    </ul>
                    </div>
                    <div className='postingComment'> 
                    {!this.props.selectedImage.commentPosted ? <button id='btnPost' onClick={this.handleClick}>Post Comment</button> 
                    : ''}
                    {/* <button id='btnDelete' onClick={this.handleClick}>Delete Comment</button>  */}
                    {this.props.selectedImage.wantToAddComment && !this.props.selectedImage.commentPosted ? 
                    <form>
                    
                    <input type='textarea' id='textPostComment' onChange={this.handleChange}/>
                    <input type='button' value='Submit' id='submit' onClick={this.handleSubmit} />
                     </form>   
                     : ''}
                    </div>
                </div>
                </div>
           </div>
        
        )
}
}
const mapStateToProps = (state) => ({

    pictures: state.pictures.pictures,
    selectedImage : state.pictures.selectedImage,
    isOpen : state.pictures.isOpen,
    likes : state.pictures.selectedImage.likes,
    commentPosted: state.pictures.selectedImage.commentPosted,
    wantToAddComment: state.pictures.selectedImage.wantToAddComment,
    comment: state.pictures.selectedImage.comment,
    Comments: state.pictures.Comments

})
const mapDispatchToProps = (dispatch) => ({
    likeThisImage : data => dispatch(likeImage(data)),
    addNewComment : data => dispatch(addComment(data)),
    deleteThisComment : data => dispatch(deleteComment(data)),
    addToMyFavorites : data => dispatch(addToFavorites(data)),
    togglePopUpModal : data => dispatch(togglePopUp(data)),
    wantToAddNewComment : data => dispatch(wantToAddComment(data)),
    makeThisProfilePicture : data => dispatch(makeProfilePicture(data))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Images);
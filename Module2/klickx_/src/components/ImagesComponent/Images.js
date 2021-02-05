import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, likeImage, addToFavorites, deleteComment, togglePopUp, wantToAddComment } from '../../actions/ImageActions';
import './Images.css';

import pictures from '../../reducers/pictureData';
import users from '../../reducers/users';



class Images extends Component { //why props? learn this
    
    state = {
        pictures: pictures,
        // pictureName : [Vrindavan, Srirangam, GantakiRiver, Moon, Fall, Fire, matches, sunset, nature1, Journey, cosmos, earth],
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
            this.props.addToFavorites(this.props.selectedImage)
            alert('Added to your favorites!!!')
        }
        if(e.target.id === 'like'){
            console.log(users.length);
            let totalNumberOfUsers = users.length + 1 // existing users plus the new registered user
            console.log(this.props.likes);
            let newNumberOfLikes = Number(this.props.likes)+1;
            if(this.props.selectedImage.likes < totalNumberOfUsers) {
                this.props.likeImage(this.props.selectedImage);
            }
            else {
                alert('Already Liked the image!!');
            }
        }
        if(e.target.id === 'btnPost'){
            console.log(e.target.id);
            this.props.wantToAddComment(true);
        }
        if(e.target.id === 'btnDelete'){
            console.log(e.target.id);
            this.props.wantToAddComment(false);
        }
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e ) => {
        e.preventDefault();
        console.log('handleSubmit');
        let newComment = document.getElementById('textPostComment').value;
        console.log(newComment);
        let newCommentObject = { 
            comment: newComment,
            by: localStorage.getItem('name')
         }
         console.log(newCommentObject);
        this.props.addComment(this.props.addComment(newCommentObject));

    }
    handleClose = (e) =>{
        console.log('clicking the close button');
        this.props.togglePopUp(false);
    }

    render(){
        console.log('Rendering Images');
        console.log(this.props.selectedImage);
        // console.log(this.props.selectedImage.liked);
        //console.log(this.props.selectedImage.comments[0].comment);
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
                    <label id='totalLikes'>Total Likes </label>
                    <label> {this.props.selectedImage.likes} </label>
                    <button id='like' onClick={this.handleClick}>{this.props.selectedImage.liked ? 'Unlike' : 'Like'}</button > 
                    { this.props.selectedImage.liked  ? <img id='likedIcon' src='/likedIcon.png' alt='likedImage'/> : ''}                   
                </div>
                <div className='commentsContainer' >
                    <ul>
                        {this.props.selectedImage.comments.map(comment => {
                            return(
                               <li> {comment.comment}</li> 
                        )} 
                        )}
                    </ul>
                    <div className='postingComment'> 
                    {!this.props.selectedImage.commentPosted ? <button id='btnPost' onClick={this.handleClick}>Post Comment</button> 
                    : <button id='btnDelete' onClick={this.handleClick}>Delete Comment</button> }
                    {this.props.selectedImage.wantToAddComment ? 
                    <form onSubmit={this.handleSubmit}>
                    
                    <input type='textarea' id='textPostComment' onChange={this.handleChange}/>
                    <input type='submit' id='submit'/>
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
    //userLiked: state.pictures.selectedImage.liked,
    likes : state.pictures.selectedImage.likes,
    commentPosted: state.pictures.selectedImage.commentPosted,
    wantToAddComment: state.pictures.selectedImage.wantToAddComment,
    comment: state.pictures.selectedImage.comment,
    Comments: state.pictures.Comments

})
const mapDispatchToProps = (dispatch) => ({
    likeImage : data => dispatch(likeImage(data)),
    addComment : data => dispatch(addComment(data)),
    deleteComment : data => dispatch(deleteComment(data)),
    addToFavorites : data => dispatch(addToFavorites(data)),
    togglePopUp : data => dispatch(togglePopUp(data)),
    wantToAddComment : data => dispatch(wantToAddComment(data))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Images);
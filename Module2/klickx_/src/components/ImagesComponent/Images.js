import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, likeImage, addToFavorites, deleteComment, togglePopUp } from '../../actions/ImageActions';
import './Images.css';

import pictures from '../../reducers/pictureData';


class Images extends Component { //why props? learn this
    
    state = {
        pictures: pictures,
        // pictureName : [Vrindavan, Srirangam, GantakiRiver, Moon, Fall, Fire, matches, sunset, nature1, Journey, cosmos, earth],
        userLiked: false,
        Comments: [],
        userFavorite: [],
        isClicked: false,
        isOpen: ''
    }
    handleClick = (e) => {
        console.log(e.target.id);
    }
    handleChange = (e) =>{
        //to bind the text which we entered and to store in that corresponding ids  
        this.setState({ [e.target.id]: e.target.value })
    }
    handleClose = (e) =>{
        this.props.togglePopUp(false)
    }
  
    render(){
        console.log('Rendering Images');
        console.log(this.props.selectedImage);
        console.log(this.props.selectedImage.comments);
        return (
            // <div className='container'>
            <div className='popup-box'>
                <div className='box'>
                <div className='imageContainer'>
                <span className="close-icon" onClick={this.handleClose}>x</span>
                <img id={this.props.selectedImage.id} src={this.props.selectedImage.source} alt={this.props.selectedImage.name} />
                </div>
                <div className='btnContainer' >
                    <button id='like' onClick={this.handleClick}>Like</button >                
                    <button id='fav' onClick={this.handleClick}>Add To Favorites </button>
                    <button id='totalLikes'>Total Likes{this.props.selectedImage.likes} </button>
                    
                </div>
                <div className='commentsContainer' >
                    <ul>
                        {/* {this.props.selectedImage.comments.comments.map(comment => {
                            return(
                               <li>{comment}</li> 
                        )} 
                        )} */}
                    </ul>
                </div>
                </div>
           </div>
    
        )
}
}
const mapStateToProps = (state) => ({

    pictures: state.pictures.pictures,
    selectedImage : state.pictures.selectedImage,
    isOpen : state.pictures.isOpen

})
const mapDispatchToProps = (dispatch) => ({
    likeImage : data => dispatch(likeImage(data)),
    addComment : data => dispatch(addComment(data)),
    deleteComment : data => dispatch(deleteComment(data)),
    addToFavorites : data => dispatch(addToFavorites(data)),
    togglePopUp : data => dispatch(togglePopUp(data))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(Images);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserHomePage.css';
import pictures from '../../reducers/pictureData';
import Images from '../../components/ImagesComponent/Images';
import { imageClicked, togglePopUp } from '../../actions/ImageActions';


class UserHomePage extends Component {
  
    imgDetails =  (e) => {
        console.log('onclick - imgDetails');
        console.log(e.target.id);
        console.log('push to new page - with that image and likes, and comments');
        console.log(e.target.alt);
        this.props.updateClick(e.target.alt);//setting the state isOpen in reducers
        this.props.togglePopUp(true); //closing the modal - pop-up

    }
   
    render () {
    const name = localStorage.getItem('name');
    console.log(name);
    return (
     <div className='userHomePage'>
                
        <div className='userHeader'>
            <h3>Welcome to Klickx_ {name} </h3>
        </div>
        <div className='userContent' >
                         
         {this.props.pictures.map(({id, name, source}) => <div key={id} onClick={this.imgDetails}><img id={id} src={source} alt={name} /></div>)}
                
        </div>
        {this.props.isOpen ? <Images />: ''}
                
     </div>
        
    )
}
}
const mapStateToProps = (state) => ({
 
    pictures : state.pictures.pictures,
    isOpen : state.pictures.isOpen,
    isClicked : state.pictures.isClicked
    
})
const mapDispatchToProps = (dispatch) => ({
    updateClick : data => dispatch(imageClicked(data)),
    togglePopUp : data => dispatch(togglePopUp(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserHomePage.css';
import pictures from '../../reducers/pictureData';
import Images from '../../components/ImagesComponent/Images';
import { imageClicked, togglePopUp } from '../../actions/ImageActions';


class UserHomePage extends Component {
    state = {
        pictures: pictures,
        isClicked: false,
        isOpen: false
    }
  
    imgDetails =  (e) => {
        console.log('onclick - imgDetails');
        console.log(e.target.id);
        console.log('push to new page - with that image and likes, and comments');
        this.setState({
            isClicked: true,
            isOpen: true
        })
        console.log(e.target.alt);
        this.props.updateClick(e.target.alt);
        this.props.togglePopUp(true)

    }
    handlePopUp = () =>{
            this.setState({ isOpen : !this.state.isOpen })
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
                         
         {pictures.map(({id, name, source}) => <div onClick={this.imgDetails}><img id={id} key={id} src={source} alt={name} /></div>)}
                
        </div>
        {this.state.isOpen ? <Images />: ''}
                
     </div>
        
    )
}
}
const mapStateToProps = (state) => ({
 
    pictures : state.pictures.pictures,
    
})
const mapDispatchToProps = (dispatch) => ({
    updateClick : data => dispatch(imageClicked(data)),
    togglePopUp : data => dispatch(togglePopUp(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
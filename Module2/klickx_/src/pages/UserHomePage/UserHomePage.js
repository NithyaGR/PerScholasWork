import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserHomePage.css';
import pictures from '../../reducers/pictureData';


class UserHomePage extends Component {
    state = {
        pictures: pictures,
        // pictureName : [Vrindavan, Srirangam, GantakiRiver, Moon, Fall, Fire, matches, sunset, nature1, Journey, cosmos, earth],
        // userLiked: false,
        // userComments: [],
        // userFavorite: []
    }
    // addToLikes = (item) => {
    //     this.setState({cartItems: [item, ...this.state.cartItems]})
    //   }
    imgDetails =  (e) => {
        console.log('onclick - imgDetails');
        console.log(e.target.className);
    }
    render () {
    const name = localStorage.getItem('name');
    console.log(name);
    return (
            <div className='userHomePage'>
                
                    <div className='userHeader'>
                                <h3>Welcome to Klickx_ {name} </h3>
                    </div>
                    <div className='userContent'>
                          <p>I'm going to display the selected Menu contents</p>
                         { pictures.map(({id, name, source}) => <img key={id} src={source} alt={name} />)}
                    </div>
                
            </div>
        
    )
}
}
const mapStateToProps = (state) => {


}
const mapDispatchToProps = (state) => {

}
export default UserHomePage;
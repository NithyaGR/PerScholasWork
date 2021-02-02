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
        console.log(e.target.id);
        console.log('push to new page - with that image and likes, and comments');
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
                         
                         { pictures.map(({id, name, source}) => <div id={id} onClick={this.imgDetails}><img key={id} src={source} alt={name} /></div>)}
                    </div>
                
            </div>
        
    )
}
}
const mapStateToProps = (state) => {


}
const mapDispatchToProps = (state) => {

}
export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);
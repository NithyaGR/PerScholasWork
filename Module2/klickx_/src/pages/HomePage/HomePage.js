
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';

import Moon from '../../Pictures/Moon.jpg';
import Fall from '../../Pictures/Fall.jpg';
import Fire from '../..//Pictures/Fire.jpeg';
import matches from '../../Pictures/matches.png';
import sunset from '../../Pictures/sunset.jpg';
import nature1 from '../../Pictures/nature1.jpg';
import Journey from '../../Pictures/Journey.jpeg';
import cosmos from '../../Pictures/cosmos.jpeg';
import earth from '../../Pictures/earth.jpeg';
import Vrindavan from '../../Pictures/Vrindavan.jpg';
import Srirangam from '../../Pictures/Srirangam.jpg';
import GantakiRiver from '../../Pictures/GantakiRiver.jpg';
import pictures from '../../reducers/pictureData';
import Images from '../../components/ImagesComponent/Images';



class HomePage extends Component{
    state = {
        pictures: pictures,
        pictureName : [Vrindavan, Srirangam, GantakiRiver, Moon, Fall, Fire, matches, sunset, nature1, Journey, cosmos, earth],
        userLiked: false,
        userComments: [],
        userFavorite: []
    }
    // addToLikes = (item) => {
    //     this.setState({cartItems: [item, ...this.state.cartItems]})
    //   }
    render() {
        console.log('inside the home page');
        console.log(this.props.pictures);
        console.log(this.state.pictures);//printing the state declared here after class declaration
        return(
                <div className='homePage'>                            
                    <div className='mainContent'>
                    {this.state.pictures.map(picture => {
                        return (
                          <Images picture={picture} />
                        )
                      }
                    )}
                    <button className='likeButton'>Like</button>
                    <button className='favButton'>Add To Favorite</button>
                    {this.state.pictures.comments.map(comments => {
                        <li>{comments}</li>
                        
                    })}
                        {/* <div className='image1'>   
                            <img src={Fall} alt='fall' />        
                        </div>
                        <div className='image2'>
                            <img src={nature1} alt='nature' />
                        </div>
                        <div className='image3'>
                            <img src={Journey} alt='journey' />
                        </div>
                        <div className='image4'>
                             <img src={Fire} alt='fire' />       
                        </div>
                        <div className='image5'>
                            <img src={matches} alt='matches' />
                        </div>
                        <div className='image6'>
                            <img src={Moon} alt='moon' />  
                        </div>
                        <div className='image7'>
                            <img src={sunset} alt='sunset' />
                        </div>
                        <div className='image8'>
                            <img src={cosmos} alt='cosmos' />
                        </div>
                        <div className='image9'>
                            <img src={earth} alt='earth' />
                        </div> */}
                    </div>
                </div>
        )
    }

}
// const mapStateToProps = (state) =>({
//     pictures: state.pictures.pictures
// })

//export default connect(mapStateToProps)(HomePage);
export default HomePage;
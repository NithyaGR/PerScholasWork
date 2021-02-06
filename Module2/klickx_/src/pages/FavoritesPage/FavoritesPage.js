import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../../actions/ImageActions';
import pictures from '../../reducers/pictureData';
import './FavoritesPage.css';
import users from '../../reducers/users';

class FavoritesPage extends Component {

    // state = {
    //     pictures: pictures,
    //     isFavorite: true,
    //     userFavorites: []

    // }
    handleClick = (e, favImg) => {
        console.log(e.target.id);
        console.log(e.target.className);
        console.log(favImg);
        this.props.removeThisFavorite(e.target.className);//passing name as a parameter
    }    

    render() {
        console.log('inside favorites page');
        console.log(this.props.userFavorites);
        console.log(this.props);
        return(
          <div className='favoritesPage'> 
            <h3> Favorites Page ! Here are your most favorite pictures</h3>
            <div className='mainContent'>
            {this.props.userFavorites.map(({id, name, source}) => 
            <div key={id} onClick={this.imgDetails}><img id={id}  src={source} alt={name} />
            <button className={name} id='removeBtn' onClick={(event) => this.handleClick(event, this.props.userFavorites)}>Remove</button>
            </div>)}
            </div> 
          </div>
        )
    }
}
const mapStateToProps = (state) => ({
    pictures: state.pictures.pictures,
    isFavorite: state.pictures.isFavorite,
    userFavorites: state.pictures.userFavorites
})
const mapDispatchToProps = (dispatch) => ({
    removeThisFavorite : data => dispatch(removeFavorite(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
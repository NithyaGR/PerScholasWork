import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../../actions/ImageActions';
import pictures from '../../reducers/pictureData';
import './FavoritesPage.css';
import users from '../../reducers/users';

class FavoritesPage extends Component {

    state = {
        pictures: pictures,
        isFavorite: true,
        userFavorites: []

    }
    handleClick = (e) => {
        console.log(e.target.id);
        console.log(e.target.className);
        console.log();
        this.props.removeFavorite(e.target.className);
    }

    render() {
        console.log('inside favorites page');
        console.log(this.props.userFavorites);
        console.log(this.props);
        return(
          <div className='favoritesPage'>
            <div className='mainContent'> 
            <h3> Favorites Page ! Here are your most favorite pictures</h3>
            {this.props.userFavorites.map(({id, name, source}) => 
            <div onClick={this.imgDetails}><img id={id} key={id} src={source} alt={name} />
            <button className={name} id='removeBtn' onClick={this.handleClick}>Remove</button>
            </div>)}
            {/* <div className='details'>

            </div> */}
            
            
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
    removeFavorite : data => dispatch(removeFavorite(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import pictures from '../../reducers/pictureData';
import users from '../../reducers/users';

class FavoritesPage extends Component {

    state = {
        users: users,

    }

    render() {
        return(
            <div>
                <h3> Favorites Page ! Here are your most favorite picture and</h3>
                <p>Logged in user should be able to see her list of favorite pictures here with likes and comments</p>


            </div>
        )
    }


}
const mapStateToProps = (state) => ({
    users: state.users.users
})
export default FavoritesPage;
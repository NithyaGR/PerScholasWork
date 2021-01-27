import React, {Component} from 'react';
import './App.css';
import playlists from './data.js';
console.log(playlists);

class App extends Component{
  // constructor(){
  //   super()
  state={
      playlists : playlists,
      title: '',
      artisit: '',
      time: ''
    }

handleChange = (event) =>{
  console.log(event.target.id);
  this.setState(
    {
        [event.target.id]:event.target.value
    })
}
handleSubmit = (event) =>{
  event.preventDefault();
  const newSong = {
    title : this.state.title,
    artist : this.state.artist,
    time : this.state.time
  }
  //const newSongArray = [newSong, ...this.state.playlists.songs]
  this.setState ({
      playlists: {
        songs : [newSong, ...this.state.playlists.songs]
      },
      title: '',
      artist: '',
      time: ''
    }
  )
}

  render(){
    return(
      <div className = "tunr-container">
        <div className = 'playlist'>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="title"> Title </label>
              <input type="text" value={this.state.title} onChange={this.handleChange} id="title" />
              <label htmlFor="artist"> Artist </label>
              <input type="text" value={this.state.artist} onChange={this.handleChange} id="artist" />
              <label htmlFor="time"> Time </label>
              <input type="text" value={this.state.time} onChange={this.handleChange} id="time" />
              <input type="submit" value="Add New Song" />
          </form>
          <h1>
            {this.state.playlists.title}
          </h1>
          <div className="songs">

               {this.state.playlists.songs.map( (song, index) => {

                 return(
                    <div className="song" key = {index}>
                        <h1> {song.title} </h1>
                        <h2> {song.artisit} </h2>
                        <h3> {song.time} </h3>
                    </div>
                 )
               }

               )}

          </div>

          </div>
      </div>
    );
  }
}

export default App;

// <div className = 'songs'>
//   {this.state.playlists.songs.map(song =>{
//     return(
//     <div className='song'>
//       <h1>{song.title}</h1>
//       <h2>{song.artist}</h2>
//       <h3>{song.time}</h3>
//       </div>
//     )}
//   )}
//   </div>

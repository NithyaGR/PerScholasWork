
class App extends React.Component {

   state = {

      baseURL: 'http://www.omdbapi.com/?',
      apikey: 'apikey=' + 'b1a48c87',
      query: '&t='
      movieTitle: 'Frozen',
      searchURL: '',
      movie: ''
   }
   handleChange = (event) => {
     this.setState({[event.target.id]: event.target.vale}) // [key]:value =) change the value (ie) state from after : where the place in the []
   }
   handleSubmit = (event) => {
     event.preventDefault();
     this.setState({
       searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
     }, () => {
       fetch(this.state.searchURL) //this send the query which is search URL and thru API get an output
            .then(response => response.json()) // the response will be json ised - :-) response is a place holder, you can use res whatever
            .then(data => {
                  console.log(data);
                  this.setState({
                    movie: data,
                    movieTitle: ''
                  }),
                  err => console.log(err);
            })
     })
   }

    render(){
      return (
        <div> Hello World




        </div>
      )
    }

}


ReactDOM.render (
  <App />,
  document.querySelector('.container')
)

//
//             fetch(this.state.searchURL)
//                 .then(response => response.json())
//                 .then(json => {
//                     console.log(json)
//                     this.setState({
//                         movie: json,
//                         movieTitle: ''
//                     }),
//                     err => console.log(err)
//                 })
//
//
//
//
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor='movieTitle'>Title</label>
//                     <input
//                         id='movieTitle'
//                         type='text'
//                         value={this.state.movieTitle}
//                         onChange={this.handleChange}
//                     />
//                     <input
//                         type='submit'
//                         value='Find Movie Info'
//                     />
//                 </form>
//                 {this.state.movie ? <MovieInfo movie={this.state.movie} /> : ''}
//             </div>
//         )
//     }
// }
//
// class MovieInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Title: {this.props.movie.title}</h1>
//                 <h2>Year: {this.props.movie.Year}</h2>
//                 <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
//                 <h3>Genre: {this.props.movie.Genre}</h3>
//                 <h4>Plot: {this.props.movie.Plot}</h4>
//             </div>
//         )
//     }
// }
//
//
//
// ReactDOM.render(
//     <App />,
//     document.querySelector('.container')
// )



/*

{(this.state.movie)
                        ? <MovieInfo movie={this.state.movie} />
                        : ''
                }

*/


class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}

class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

     class Player extends React.Component {
       render () {
         return (
           <div className={this.props.className}>
             <h2>Player {this.props.className} </h2>
             <h3>Wins: </h3>
           </div>
         )
       }
     }
class PlayersContainer extends React.Component {
    render () {
      return (
        <div className= "playersDiv">
          <Player className="X"/>
          <Player className="O"/>
        </div>
      )
    }
}
class Header extends React.Component{

  render(){
    return(
      <div class="header">
         <h1> React Tac Toe </h1>
      </div>
    )
  }
}
class App extends React.Component{

  render(){
    return(
          <div>
              <Header />
              <PlayersContainer />
              
              <Board />
          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

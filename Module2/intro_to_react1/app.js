const message = "Hello World! My First React";

// document.addEventListener('DOMContentLoaded',()=>{
//   const div= document.querySelector('.container');
//   div.innerHTML = '<h1>'+message+'</h1>';
// })
class Board extends React.Component{
  render(){
    return(
      <div class="board">
      </div>
    )
  }
}
class Player extends React.Component { 
   render() { 
         return ( 
           <div class="player"> 
               <h2> Player : </h2> 
               <h3>Wins: </h3> 
           </div> 
          )
        } 
     } 
// class Player extends React.Component{
//
//   render(){
//     return(
//           <div class="player">
//             <h2> Player : </h2> // after : {this.props.id}
//             <h3> Wins: </h3>
//           </div>
//     )
//   }
// }
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
              <Player id="X"/>
              <Player id="O"/>
          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

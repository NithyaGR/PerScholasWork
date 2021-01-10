class MainBottom extends React.Component {
  render() {
    return (
        <div className="mainBottom">
            Website Visitors
        </div>
  )
  }
}
class MainTop extends React.Component{
  render() {
      return(
        <div className={this.props.className}>{this.props.name} </div>
      )
  }
}
class Main extends React.Component {
  render() {
    return(
      <div className="main">
         <MainTop className="reviews" name="Reviews"/>
         <MainTop className="averageRating" name="Average Ratings" />
         <MainTop className="sentimentalAnalysis" name="Sentimental Analysis" />
         <MainBottom />
      </div>
    )
  }
}
class SideBar extends React.Component { 
   render() { 
         return ( 
           <div className="sideBar"> 
               // <h1>Dashboard</h1> 
               // <h5>Widget</h5> 
               // <h5>Reviews</h5>
               <h5>Customers</h5>
               <h5>Online Analysis</h5>
               <h5>Settings</h5>
           </div> 
          )
        } 
     } 

class App extends React.Component{

  render(){
    return(
          <div className="dashContainer">
              <SideBar />
              <Main />


          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

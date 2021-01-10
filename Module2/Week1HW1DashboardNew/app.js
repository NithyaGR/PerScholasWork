
class MainComponents extends React.Component{
  render() {
      return(
        <div className={this.props.className}>
            <h4>{this.props.name}</h4>
            <h5>{this.props.count}</h5>

        </div>
      )
  }
}
class Main extends React.Component {
  render() {
    return(
      <div className="main">
         <MainComponents className="reviews" name="Reviews" count="1,281" />
         <MainComponents className="averageRating" name="Average Ratings" count="4.6" />
         <MainComponents className="sentimentalAnalysis" name="Sentimental Analysis" count="960" />
         <MainComponents className="websiteVisitors" name="Website Visitors" count="821" />
      </div>
    )
  }
}
class SideBar extends React.Component { 
   render() { 
         return( 
           <div className="sidebar">
               <h2>Dashboard</h2>
               <h2>Widget</h2>
               <h2>Reviews</h2>
               <h2>Customers</h2>
               <h2>Online Analysis</h2>
               <h2>Settings</h2>
            </div>
          )
        } 
     } 

class App extends React.Component{
  render(){
    return(
          <div className="container">
              <SideBar />
              <Main />
          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.mainContainer')
);

class App extends React.Component {


  render(){
    return(
          <div>
              <DivOne />
          </div>
        )
  }

}
class DivOne extends React.Component {

  render () {
    return(
      <div>
            <DivTwo />
      </div>
    )
  }
}
class DivTwo extends React.Component {

  render () {
    return(
      <div>
            <DivThree />
      </div>
    )
  }
}
class DivThree extends React.Component {

  render () {
    return(
      <div>
            <div>
               <DivFour />
            </div>
            <div>
               <DivFive  />
            </div>
      </div>
    )
  }
}
class DivFour extends React.Component {
  state ={
    tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
  }

changeIt = (text) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
}

  render () {
    return(

            <div className="top" onClick= { () => this.changeIt(this.state.tardis.name)}>
                <h2>{this.state.tardis.name}</h2>
            </div>


    )
  }
}
class DivFive extends React.Component {
  state ={
    tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
  }

changeIt = (text) => {
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
}

  render () {
    return(

            <div className="bottom" onClick= { () => this.changeIt(this.state.tardis.name)}>
                <h2>{this.state.tardis.name}</h2>
            </div>


    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

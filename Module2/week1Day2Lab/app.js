
class Receipt extends React.Component{
    // var isReceiptVisible;
    state = {
      isReceiptVisible : true
    }
    handleChange = (event) => {
    console.log(event.target.value);
    // this.state.value = event.target.value
    //this.setState({value: event.target.value});
    console.log(this.props.receipt.paid);
    this.props.receipt.paid = true;
    console.log(this.props.receipt.paid);
    this.props.isReceiptVisible = false;
    console.log("After clicking the checkbox isReceiptVisible is set " + this.props.isReceiptVisible);
    this.setState({isReceiptVisible:false});

  }
  render() {
      return(
       <div className="receipt" isReceiptVisible="true"> 

              <h3> {this.props.receipt.person}</h3>
              <h5> <span> Main: </span> {this.props.receipt.order.main}</h5>
              <h5> <span> Protein: </span> {this.props.receipt.order.protein}</h5>
              <h5> <span> Rice: </span> {this.props.receipt.order.rice}</h5>
              <h5> <span> Sauce: </span> {this.props.receipt.order.sauce}</h5>
              <h5> <span> Drink: </span> {this.props.receipt.order.drink}</h5>
              <h5> <span> Cost: </span> {this.props.receipt.order.cost}</h5>
              <input type="checkbox" onChange={this.handleChange} id="cb"/>
              <label htmlFor="checkBox">Paid</label>

        </div> 
    )
  }
}
class App extends React.Component {
  state = {
     receipts
  }

  render(){
    return(
          <div>
            <h1 className="truck-name">Korilla</h1>
            <div className="container2">
                  {this.state.receipts.map(receipt => (receipt.paid) && (!isReceiptVisible) ? '' : <Receipt receipt={receipt}/>)}
            </div>

          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

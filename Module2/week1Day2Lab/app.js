
class Receipt extends React.Component{

    // state = {
    //   receipts,
    //   isReceiptVisible : true //is the receipt visbible
    // }

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
              <input type="checkbox" onClick={(event) => this.props.onClick(event, this.props.receipt)} id="cb" name="cb"/>
              <label htmlFor="cb">Paid</label>

        </div> 
    )
  }
}
class App extends React.Component {

  state = {
     receipts: receipts,
     isReceiptVisible : true //is the receipt visbible

  }
  handleClick = (event, receipt) => {
      console.log("inside Handle change");
      const getIndex = this.state.receipts.findIndex ((eachItemInsideArray) => eachItemInsideArray.person === receipt.person);
      console.log(getIndex);
      console.log(receipt);
      console.log(receipt.paid);
      console.log(this.state.receipts);
      let updatedReceipts = this.state.receipts;
      updatedReceipts[getIndex].paid = true;
      console.log(updatedReceipts[getIndex].paid);
      this.setState(
          {
            receipts : updatedReceipts
          }
      )
}


  render(){
    console.log("Inside App");
    return(
          <div onChange={this.handleChange}>
            <h1 className="truck-name">Korilla</h1>
            <div className="container2">
                  {this.state.receipts.map(receipt => receipt.paid ? '' : <Receipt receipt={receipt} onClick={this.handleClick}/>)}
            </div>

          </div>
        )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
);

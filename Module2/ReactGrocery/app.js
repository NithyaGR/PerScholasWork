
class ShoppingList extends React.Component {
  render() {
    return(
      <div className="shoppinglist">
          <h3> {this.props.list.item}</h3>
          <h4> {this.props.list.brand}</h4>
          <h4> {this.props.list.units}</h4>
          <h4> {this.props.list.quantity}</h4>
          <input type="checkbox" id="isPurchased" name="isPurchased" />
          <label htmlFor="isPurchased">Purchased</label>
      </div>
    )
  }
}
class App extends React.Component{

  state = {
      groceries
  }
  addToList = (item) => {
    this.setState({groceries: [item, ...this.state.groceries]})
  }
  itemChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handlePurchased = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }
  handleSubmit = (event) => {
      event.preventDefault()
      console.log("Clicking Submit Button");
      const item = {
          item: this.state.item,
          brand: this.state.brand,
          units: this.state.units,
          quantity: this.state.quantity,
          isPurchased: false
      }
      console.log(item.item);
      this.setState({
          groceries :[item, ...this.state.groceries],
          item: '',
          brand: '',
          units: '',
          quantity: '',
          isPurchased: false
    })
  }

  render(){
    return(
          <div>
              <h1> Shopping List</h1>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="item">Item</label>
                  <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
                  <br />
                  <label htmlFor="brand">Brand</label>
                  <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand" />
                  <br />
                  <label htmlFor="units">Units</label>
                  <input type="text" value={this.state.units} onChange={this.handleChange} id="units" />
                  <br />
                  <label htmlFor="quantity">Quantity</label>
                  <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity" />
                  <br />
                  <input type="submit" />
              </form>
          <br />
          <h3>To Be Purchased</h3>
          <div className="toBePurchased">
          <ul>
                {
                    this.state.groceries.map(
                        (list) => !list.isPurchased
                        ? <li>
                            {list.item}</li>
                        : "")
                }
            </ul>


          </div>
          </div>
        )
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
//handlePurchased={this.handlePurchased}

// {this.state.groceries.map(list => {
//   return (
//     <ShoppingList list={list} />
//   )
// }
// )}
//{this.state.groceries.map(list => (<ShoppingList list={list} handleAdd={this.addToList}/>))}

import React, {Component} from 'react';
import Review.css;

class Review extends Component {
  render(){
    return(
      <div className="review">
        <label htmlFor="title">Book Title: </label>
        <input type="text" id="title" value={this.props.title} onChange={this.handleChange} />

        <input type="submit" id="submit" />

      </div>
    )
  }
}

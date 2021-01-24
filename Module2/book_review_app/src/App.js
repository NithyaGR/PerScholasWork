import React, {Component} from 'react';
import './App.css';
import Summary from './Summary.js';
import Portal from './Portal.js';


class App extends Component {

  state = {
    baseURL: 'https://api.nytimes.com/svc/books/v3/reviews.json?',
    apikey: `${process.env.REACT_APP_API_KEY}`,
    searchType: 'title',
    searchText: '',
    searchURL: '',
    title: '',
    author:'',
    summary: '',
    error:'',
    instructions: true,
    formClickCount: 0
  }
  // handle change - call function will bind the text which we type in the text box
  handleChange = (event) =>{
    console.log(event.target.id);
    this.setState({ [event.target.id]: event.target.value })
  }
  // this will grab the selection from the dropdown (which is a search type - title or author ) and assign that value in variable
  // declared in the state searchType
  onSelectChange = (event) => {
    this.setState({
      searchType: event.target.value
    })
    /* Verification poits*/
    console.log("inside onSelectChange method");
    console.log("id is "+event.target.id);
    console.log("value is "+event.target.value);
    console.log("searchType is "+this.state.searchType);
    console.log("searchText is "+this.state.searchText);
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    /* While submitting  the form without changing the dropdown it's not fetching or changing the searchType by defaul
    To change that mannually, I added the following logic - If in case the user doesn't choose the option, as it's there
    already displayed, the search text is empty. Explicitly adding the text to the searchText */
    let valueForSearchType = document.getElementById('searchType').value;
    console.log(valueForSearchType);
    if(this.state.searchType === null){
      this.setState({
        searchType : valueForSearchType
      })
    }
     this.setState({

       searchText: '',
       searchURL : this.state.baseURL + this.state.searchType + '=' +this.state.searchText + this.state.apikey,
       error: '',
       formClickCount: this.formClickCount++

    }, () =>{
       console.log(this.state.searchURL);
       fetch(this.state.searchURL)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              console.log(data.results);
              console.log(data.results[0].summary);
              this.setState({
                    summary: data.results[0].summary
              })

          })
          .catch(err => {
            console.log(err);
            this.setState({
                  summary: 'Please Check the Spelling &  select your search Type again , and re-enter the form!'
            })
          })
  })
}
toggleInstructions = () => {
  this.setState({ instructions: !this.state.instructions })
}
  render (){
      return (
        <div className="App">
        {this.state.instructions ?
          <Portal>
            <div className='portal'>
                <h3>NYT List of Books</h3>
                <pre>
                  Please use the following list of book for your search. <br />As the NYT API has limited number of Books<br />
                  for the search, use the list below for your search!Thank You! <br /><br />
                  Title                 Author<br />
                  Becoming              Michelle Obama<br />
                  The Vanishing Half    Brit Bennett<br />
                  A TIME FOR MERCY      John Grisham<br />
                  Caste                 Isabel Wilkerson<br />
                  A Promised Land       Barack Obama<br />

                </pre>
                <button onClick={this.toggleInstructions}>Close</button>
                {/*<img src='https://compote.slate.com/images/fb3403a0-6ffc-471a-8568-b0f01fa3bd6b.jpg' />*/}
              </div>
          </Portal>
          : ''
        }
                <div className='formContainer'>
                <h3> Search Book By Title or Author </h3>
                    <form onSubmit={this.handleSubmit} className='myForm'>

                            <label htmlFor="searchText">Enter Title Or Author Name : </label>
                            <input id='searchText' type='text' value={this.state.searchText} onChange={this.handleChange}  />
                            <label htmlFor="searchType">Choose a search type : </label>

                              <select defaultValue={'Default'} name="searchType" id="searchType" onChange={this.onSelectChange}>
                                      <option value="Default" disabled id="defaultValue"> Choose the search type </option>
                                      <option value='title' id="title">Title</option>
                                      <option value='author' id="author">Author</option>
                                </select>
                            <br /> <br />
                            <input type="submit"/>
                    </form>
                </div>
                <div>
                  {this.state.summary ? <Summary summary={this.state.summary} /> : ''}
                </div>
          </div>

      );
   }
}
export default App;

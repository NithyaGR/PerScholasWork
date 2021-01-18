
class App extends React.Component {

  state = {
              answer: "Rome",
              question: "When Italy was declared united in 1861, it was still missing Venice & this current capital",
              value: 100,
              score: 0,
              category: {
                  title : ""
              },
              showQuestion: false,
              showAnswer: false

  }
  // http://jservice.io/api/random
  //componentDidMount() {
  fetchQuestion() {
        fetch('http://jservice.io/api/random')
          .then(response => {
            return response.json()
          }).then(data => {
              console.log(data)
              console.log(data[0].answer);
              console.log(data[0].question);
              console.log(data[0].value);
              console.log(data[0].category.title);
              // currentAnswer = data[0].answer;
              // currentQuestion = data[0].question;
              // console.log(currentAnswer);
              // console.log(currentQuestion);
          this.setState({
            answer: data[0].answer,
            question: data[0].question,
            value: data[0].value,
            category: {
              title : data[0].category.title
            },
            showQuestion: true,
            showAnswer: false

          })
      })
  }
      display = (event) =>{
        console.log(event.target.id);
        if (event.target.id === "getQuestion"){
              this.fetchQuestion();
        }
        if (event.target.id === "revealAnswer"){
              this.setState(
                {showAnswer: true}
              )
        }
      }
      setScore = (event) => {
        const currentValue = this.state.value;
        var currentScore = this.state.score;
        if(event.target.id === "increase"){
          currentScore = currentScore + currentValue;
        }
        if(event.target.id === "decrease"){
            currentScore = currentScore - currentValue;
        }
        this.setState(
          {score : currentScore}
        )
      }
  render () {
    const isShowQuestion = this.state.showQuestion;
    const isShowAnswer = this.state.showAnswer;
    return (
        <div className="jeopardy">
            <h1> Welcome To Jeopardy </h1>
            <h3 id="score"> Score: {this.state.score}</h3>
            <div id="divForButtons">
                  <button id="increase" onClick={this.setScore}> Increase </button>
                  <button id="decrease" onClick={this.setScore}> Decrease </button>
                  <button id="reset"> Reset </button>
            </div>
            <div id="question">
                  <h2> Let's Play! </h2>
                  <button id="getQuestion" onClick={this.display}> Get Question </button>

                  <h3> Category: {this.state.category.title} </h3>
                  <h3> Points: {this.state.value} </h3>
                  <h3> {isShowQuestion ?  this.state.question  : '' }</h3>
            </div>
            <div id="answer">
                  <button id="revealAnswer" onClick={this.display}> Answer </button>
                  {  isShowAnswer ? <h3> Answer: {this.state.answer} </h3> : ''  }
            </div>

        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))

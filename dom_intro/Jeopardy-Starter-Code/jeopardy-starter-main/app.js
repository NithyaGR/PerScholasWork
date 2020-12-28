var currentScorePoint;
$(()=>{

      // const $tiles = $('.tile').on('click', (event)=>{
      // $(event.currentTarget).toggleClass('active');
      const team1 = new Team('team1', $('#team1')).setup();
      const team2 = new Team('team2', $('#team2')).setup();
      const team3 = new Team('team3', $('#team3')).setup();
      console.log(team1.$el); //confirm the element is working
      const tiles = $('.tile');
      $(tiles).on('click', eventClickFunction);
      const btn = $('button'); //creating variable btn to grab the element button
      //$('button').on('click', eventClickFunction);

      $(btn).on('click', (event)=>{

          $('.question .question-answer').show();
          currentScorePoint = $('.board .row .tile.active .question-value').text();
          /* The above text is $100, we need without $, so make substring and fetch only the number,
           * and then convert from text into number
           */
          currentScorePoint = Number(currentScorePoint.substring(1,4));
          console.log(currentScorePoint);
          $('.board .row .tile.active .question-value').text("");//to change value to null so that we know it's taken already
          revealAnswer();// test1
          event.preventDefault();//The event.preventDefault() method stops the default action of an element from happening.
          //$('.board .row .tile.active .question-value').off('click'); didn't work
          //console.log( event.isDefaultPrevented());//to check whether the preventDefault() method was called for the event
      });
    })

// $('button').on('click', (event)=>{
  // $('.question-answer').css('display': 'block');
const eventClickFunction = (event) =>{
  var currentElement = $(event.currentTarget).attr("id");
  console.log(currentElement);
  $(event.currentTarget).toggleClass('active');
};

//test1
const revealAnswer = () =>{
  $('.ModalReveal').css('display', 'block');
}
/*
 * The below codes for score card display
 */
class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        //lets assign the element to each Team instance
        this.$el = $el;
    }
    //what does the score board do?
    //it increases the score based on pointvalue
    increaseScore(pointValue){
     // this.score = this.score + pointValue;
     this.score += pointValue;
     //this will now allow us to grab the 1st element and input the score as the text
     //what is eq? it stands for equals and selects children in arry
     // the first child is the h1
     this.$el.children().eq(0).text(this.score);
    }

    decreaseScore(pointValue){
        this.score -= pointValue;
        this.$el.children().eq(0).text(this.score);
    }
    setup(){
        //select your 2nd child because thats your btn
        this.$el.children().eq(1).on('click', () => {
            //the pt value should be imported from another class
            this.increaseScore(currentScorePoint)

        })
        this.$el.children().eq(2).on('click', () => {
            this.decreaseScore(currentScorePoint)

        })
        //remember to call these methods when you instantiate the class
        return this;
    }

}

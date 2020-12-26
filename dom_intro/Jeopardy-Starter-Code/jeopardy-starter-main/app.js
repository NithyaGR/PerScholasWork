$(()=>{

      // const $tiles = $('.tile').on('click', (event)=>{
      // $(event.currentTarget).toggleClass('active');
    const tiles = $('.tile');
    $(tiles).on('click', eventClickFunction);

      $('button').on('click', (event)=>{
          event.preventDefault();
          $('.question .question-answer').show();

      });
    })
})

// $('button').on('click', (event)=>{
  // $('.question-answer').css('display': 'block');
const eventClickFunction = (event) =>{
  var currentElement = $(event.currentTarget).class();
};

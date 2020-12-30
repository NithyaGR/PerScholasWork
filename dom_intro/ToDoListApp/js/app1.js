
class toDo {

  constructor(toDoItem, completeButton){

  }
}
class done {

}

var toDoList = []; //list of to do things
var doneList = []; // done list of things
const completeButton = "<input type = 'submit' value= 'COMPLETED'>";
const removeButton = "<input type = 'submit' value= 'REMOVE'>";
$('form').on('submit', (event) => {
  toDoList.push( $('#input-box').val() );
  event.preventDefault(); //The event.preventDefault() method stops the default action of an element from happening.
  $(event.currentTarget).trigger('reset');
  render();
});
const render = ()=>{
    $('#toDoUL').append('<div class="toDoMini"> <li>'+ toDoList[toDoList.length-1] +'</li> <br>'+ completeButton+ '</div>');

    // Instead of adding event listeners to every li tag all at once, we add it to this newly created one only
    // We target divs with class of toDoMini, focus on the last in the returned collection, and then focus further on it's li child
    let newlyAddedLi = $('.toDoMini').last().children('li');//.eq()
    //let newlyAddedLi = $("li").eq(0).last().children();
    //let newlyAddedLi = $('.toDoMini').eq(1);
    //let newlyAddedLi = $('.toDoMini').last().children('input');
    console.log(newlyAddedLi);
    $(newlyAddedLi).on('click', eventClickFunction);
}
const createDoneSection = (someElement) =>{
  $('#doneUL').append('<div class="doneMini"> <li>'+ someElement +'</li> <br>'+ removeButton+ '</div>');

  let newlyAddedLi = $('.doneMini').last().children('li');

  console.log(newlyAddedLi);
  // Notice that we also add an event handler on the newly appended li tag
  // Previously, the event handlers were only being applied after user clicked the "Add" button
  $(newlyAddedLi).on('click', eventClickFunction)
}
// Separated the event function and gave it a name so it could easily be used more than once
const eventClickFunction = (event) => {

    var parent = $(event.currentTarget).parent();
    // Grabbing the div's class (which is either toDoMini or doneMini)
    let liClass = parent.attr('class');
    var item = $(event.currentTarget).text();

    // Only want certain things to happen if the class is doneMini
    // For example: We don't want createDoneSection function to run
    if (liClass === 'toDoMini') {
      var index = toDoList.indexOf(item);
      var removedArray = toDoList.splice(index,1);
      doneList.push(removedArray[0]);
      createDoneSection(removedArray[0]);
    } else {
      console.log('ye')
      var index = doneList.indexOf(item);
      doneList.splice(index,1);
    }

      parent.remove();
};

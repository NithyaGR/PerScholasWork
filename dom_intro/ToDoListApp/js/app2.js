
var toDoList = []; //list of to do things
var doneList = []; // done list of things
const completeButton = "<input type = 'submit' class = 'compBtn' value= 'COMPLETED'>";
const removeButton = "<input type = 'submit' class = 'removeBtn' value= 'REMOVE'>";
$('form').on('submit', (event) => {
  toDoList.push( $('#input-box').val() );
  event.preventDefault(); //The event.preventDefault() method stops the default action of an element from happening.
  $(event.currentTarget).trigger('reset');
  render();
});
const render = ()=>{

    $('#toDoUL').append('<div class="toDoMini"> <li>'+ toDoList[toDoList.length-1] +'</li> <br>'+ completeButton+ '</div>');
    var btnClicked = $('.compBtn');
    $(btnClicked).off().on('click', eventClickFunction);//prevents multiple event handlers
}
const createDoneSection = (someElement) =>{

  $('#doneUL').append('<div class="doneMini"> <li>'+ someElement +'</li> <br>'+ removeButton+ '</div>');
  var btnClicked = $('.removeBtn'); //grabbing the button
  $(btnClicked).off().on('click', eventClickFunction);//prevents multiple event handlers, multiple clicks

}
// Separated the event function and gave it a name so it could easily be used more than once
const eventClickFunction = (event) => {
    console.log("Button clicked");
    event.preventDefault(); //The event.preventDefault() method stops the default action of an element from happening.
    var parent = $(event.currentTarget).parent();
    let liClass = parent.attr('class'); // Grabbing the div's class (which is either toDoMini or doneMini)
    console.log(liClass);
    var prev = $(event.currentTarget).prevAll()[1];//grabbing the previous corresponding list element prevAll()[1], siblings('li')
    console.log(prev);
    console.log($(event.currentTarget).prevAll());
    item = prev.textContent; //grabbing the list element's content
    console.log(item);
    // Only want certain things to happen if the class is doneMini
    // For example: We don't want createDoneSection function to run
    if (liClass === 'toDoMini') {
      var index = toDoList.indexOf(item);
      var removedArray = toDoList.splice(index,1);
      doneList.push(removedArray[0]);
      console.log(removedArray);
      console.log(doneList);
      createDoneSection(removedArray[0]);
    } else {
      console.log('ye')
      var index = doneList.indexOf(item);
      doneList.splice(index,1);
    }

      parent.remove();
};
/* PTR - .off().on('click') - to prevent the event handlers to execute multiple times
 * siblings(), prevAll(), prev() to catch all the required nodes
 * textContent to fetch the text of any nodes
 */

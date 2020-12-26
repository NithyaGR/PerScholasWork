var toDoList = [];
var doneList = [];


const completeButton = "<input type = 'submit' value= 'COMPLETED'>";
const removeButton = "<input type = 'submit' value= 'REMOVE'>";



$('form').on('submit', (event) => {
  console.log( $('#input-box').val() );
  toDoList.push( $('#input-box').val() );
  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render();
});
const render = ()=>{
  console.log("render");
  var counter=0;
  //$('ul').empty(); // This will empty the previous list and add items only once while using for each to add the list
    $('#toDoList').append('ul');
    $('#toDoUL').append('<div class="toDoMini"> <li>'+ toDoList[toDoList.length-1] +'</li> <br>'+ completeButton+ '</div>');

    //$(completeButton).attr("id", "id_" + counter); // setting id to button
    //console.log(completeButton);
    // console.log(completeButton.attr('id'));
    $('li').on('click', (event) => { //this learn from the team to click the button
        moveToDoneList();

  });


}
const moveToDoneList = ()=>{

  var item = $(event.currentTarget).text();
  console.log(toDoList);
  console.log(item);
  var index = toDoList.indexOf(item);
  console.log(index);
  var removedArray = toDoList.splice(index,1);
  doneList.push(removedArray[0]);
  console.log("done List "+doneList);
  console.log("done list length "+doneList.length);
  console.log("to do List "+toDoList);
  console.log("to do list length "+toDoList.length);
  var parent = $(event.currentTarget).parent();
  console.log(parent);
  parent.hide();
  //trying
  //$(parent).toggleClass('doneListClass');
  createDoneSection(removedArray[0]);
}
const createDoneSection = (someElement) =>{
  //
  // console.log(doneList);
  // console.log(doneList.length);
  // console.log(doneList[doneList.length-1]);
  console.log(someElement);

  $('#doneUL').append('<div class="doneMini"> <li>'+ someElement +'</li> <br>'+ removeButton+ '</div>');
  console.log("inside done section ");


}

const toDoList = [];
var doneList = [];


const completeButton = "<input type = 'submit' value= 'COMPLETED'>";
const removeButton = "<br> <button type = 'submit'> REMOVE </button>";



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
    $('ul').append('<div class="toDoMini"> <li>'+ toDoList[toDoList.length-1] +'</li> <br>'+ completeButton+ '</div>');

    $(completeButton).attr("id", "id_" + counter); // setting id to button
    console.log(completeButton);
    // console.log(completeButton.attr('id'));
    $('li').on('click', (event) => { //this learn from the team to click the button

        $(event.currentTarget).css('text-decoration','line-through');

        var item = $(event.currentTarget).text();
        console.log(item);
        var index = toDoList.indexOf(item);
        console.log(index);
        doneList = toDoList.splice(index,1);
        console.log(doneList);
        console.log(toDoList);
        var parent = $(event.currentTarget).parent();
        console.log(parent);
        parent.toggleClass('doneMini');
        parent.hide();

  });

}

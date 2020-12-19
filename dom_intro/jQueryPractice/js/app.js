
$("ul").before("<h2> My favorite dogs!!") //This command selects the <ul>
//(unordered list) and adds a <h2> tag which says “My favourite dogs!!” right before the <ul> tag.
$("ul").after("<h2> All dogs are awesome!!")
//This command selects the <ul> (unordered list) and adds a <h2> tag which says “All dogs are adorable!!”
//right after the <ul> tag.
console.log($("li").text()) //selects the <li> (list) and uses the text() method to return the content of the <li>.
$("h1").text("I've changed this text")
//selects the only <h1> tag and sets or replaces the content of the <h1> tag with
//“Welcome to this fun jQuery Tutorial”.
console.log($("li:first").html())

$("li:first").html("Golden Shepherd")

console.log($("ul").text())//this prints the text alone
console.log($("ul").html())//this prints in the html format

// jQuery Methods – css()
// The jQuery css() method is used to get or set style properties for selected elements.
// Refer the below syntax:
// $(selector).css(propertyname);
// $(selector).css(propertyname, value);
// The first command selects the <h1> and applies a background color to it.
// The second command selects all the elements of the <ul> tag and sets their color to green.
$("h1").css("background-color","green")
$("ul li").css("color", "blue")

// jQuery Methods – attr()
// The jQuery attr() method is used to set or return attributes and values of the selected
// elements. Refer the below syntax:
// $(selector).attr(attribute)
// $(selector).attr(attribute, value)

//
// jQuery Methods – val()
// The jQuery val() method is used to set or
// return current values of the selected elements. Refer the below syntax:
// $(selector).val( )
// $(selector).val(value)
// $("input").val("Hello!")


//jQuery Methods – addClass()
// The addClass() method is used to add one
// or more class to the selected element. Refer the below syntax:
//
// $(selector).addClass(classname)
//$("input").addClass('blue')
//$("input").removeClass('blue')
//$("input").toggleClass('blue')


// jQuery Events – click()
// When you click on an element, the click event occurs by executing a function or a set of
// statements. Refer the below syntax:
// $(selector).click(function)
// Query Events – keypress()
// The jQuery keypress ( ) event is executed when a character is entered. Refer the below syntax:
//
// $(selector).keypress(function)
//
// $(selector).on()

// $( () => {
//     $(".square").draggable();
// } );
// const call = $( () => {
//     $(".square").draggable();
// } );
// $(() => {
//   call;
// });

// jQuery Effects – hide()
// The jQuery hide() method is used to hide the selected elements. Refer the below syntax:
//
// $(selector).hide(speed, callback);

// $('div').hide();
// $('div').show();
// $('div').toggle();

// jQuery Effects – fadeIn()
// The jQuery fadeIn() method is used to fade in the selected element. Refer the below syntax:
//
// $(selector).fadeIn(speed, callback);
// $('div').fadeIn(); //display
// $('div').fadeOut();//hide
// $('div').toggle(); // on and off fadeIn and fadeOut


// jQuery Effects – slideDown()
// The jQuery slideDown() method is used to slide down the selected element. Refer the below syntax:
//
// $(selector).slideDown(speed, callback);
// This will slideDown() a small box.
//$('div').slideDown(); // slide down the Box div
//$('div').slideUp(); // this will slide up the div box

//
//
//  const promise = $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
//  })
//  promise.then ((data) => {
//   console.log(data);
// },//very important, as this separates 2 function parameters
//  () => {
//   console.log("Bad Request");
//   }
// );
// //another way to write the above is
//
// $(() => {
//   $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
//   })
//   .then( (data) => {
//     $('#title').html(data.Title);
//     $('#year').html(data.Year);
//     $('#rated').html(data.Rated);
//   },
//   () => {
//     console.log("Bad Request");
//   }
//   )
//
// }
// );
//Dynamic Ajax Request

$(() => {
      $('form').on('submit',(event) => {
              event.preventDefault(); //what is this and what it does?
              const userInput = $('input[type="text"]').val();
              $.ajax({
                url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
              })
              .then( (data) => {
                  $('#title').html(data.Title);
                  $('#year').html(data.Year);
                  $('#rated').html(data.Rated);
                  //console.log(data.Title);
                },
                () => {
                  console.log("Bad Request");
              })
      })
})

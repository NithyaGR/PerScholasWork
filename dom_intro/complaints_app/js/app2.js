var index = 0; // if the buttons clicked, index will be added.
$(() => {
      $('form').on('submit',(event) => {
              event.preventDefault(); //The event.preventDefault() method stops the default action of an element from happening.
              if(index >0) {
                $('#myDynamicTable tbody').empty(); //this will empty the table each time done with the request
                //console.log("Emptying the table");
                }

              let noOfcomplaints = $('input[type="text"]').val();
              if(noOfcomplaints == ""){
                noOfcomplaints = 10;
              }
              console.log(noOfcomplaints);
              const borough = (document.activeElement.getAttribute('value')).toUpperCase();
              console.log(borough);
              const agency = "&$where=agency=" + "'NYPD'";
              const limit = '&$limit='+noOfcomplaints;
              console.log(limit);
              $.ajax({
                url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + borough + limit + agency
              })
              .then( (data) => {
                  index++;
                  for(let i=0; i<Number(noOfcomplaints); i++){
                    var complaint_type = data[i].complaint_type;
                    console.log("i value is : "+i+" "+complaint_type);
                    var rowDiv = $('.row');
                    var div1 = $('<div class="val1">'+complaint_type+'</div>');
                    rowDiv.append(div1); //'<div class="val1">'
                    var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
                    div1.append(button);
                    //div1.append('<input type="button" id="'+i+'" value="Toggle Police Response"></input>');
                    div1.append($('<br><label text=""></label>'));
                    $('label').text(data[i].resolution_description);
                    $('label').css('display','none');
                    $(button).off().on('click', function(e){
                          event.preventDefault();// method stops the default action of an element from happening.
                          console.log("clicking Toggle");
                          console.log(data[i].resolution_description);
                          $('label').toggle();
                          //$('label').hide();
                          //console.log($(this));
                          //var btnid = '#'+i+'input';
                          //$(event.currentTarget).append($('<br><label text=""></label>'));
                          //$(button).append($('<br><label text=""></label>'));
                          //$(btnid).append($('<br><label text=""></label>'));
                          //$('label').text(data[i].resolution_description);
                          //$(button).after(text(data[i].resolution_description);

                          index++;
                    });
                  }
                    },
                    () => {
                      console.log("Bad Request");
              })
      })
})

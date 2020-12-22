var index = 0;
$(() => {
      $('form').on('submit',(event) => {
              event.preventDefault(); //what is this and what it does?
              if(index >0) {
                $('#myDynamicTable tbody').empty();
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
                    var tableData;
                    const table = $('#myDynamicTable tbody');
                    //$('#myDynamicTable tbody').append(button);
                    index++;
                    for(let i=0; i<Number(noOfcomplaints); i++){
                          tableData = data[i].complaint_type;
                          var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
                          var tr = $('<tr>');
                          tr.append('<td>'+tableData+'</td>');
                          var td = $('<td>');
                          td.append(button);
                          tr.append(td);
                          // var description = $('<td>');
                          // description.text(data[i].resolution_description);
                          // description.hide();
                          // tr.append(description);
                          $(button).on('click', function(){
                              console.log("clicking Toggle");
                              alert(data[i].resolution_description);
                              index++;
                              //description.show();
                              //$(button).hide();
                          });
                          //tr.append('<td>'+data[i].resolution_description+'</td>');
                          $('#myDynamicTable tbody').append(tr);
                        }
                    },
                    () => {
                      console.log("Bad Request");
              })
      })
})

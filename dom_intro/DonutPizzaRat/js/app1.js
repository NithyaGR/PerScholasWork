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
                    var description;
                    const table = $('#myDynamicTable tbody');

                    //$('#myDynamicTable tbody').append(button);
                    index++;
                    for(let i=0; i<Number(noOfcomplaints); i++){
                          var btnId = 'btn'+i;
                          var divId ='div'+i;
                          tableData = data[i].complaint_type;
                          //var button = $('<input></input>').attr({'type': 'button', 'background-color': 'maroon', 'color': 'white'}).val("Toggle Police Response");
                          var button = $('<div id='+btnId+'><input type="button" id="'
                                        +i+'" value="Police Response" onclick="response('+i+')"></input></div>'
                                        +'<div id='+divId+' style="display:none">'+data[i].resolution_description+'</div></td>');
                          var tr = $('<tr>');
                          tr.append('<td class="data">'+tableData+'</td>');
                          var td = $('<td>');
                          td.append(button);
                          tr.append(td);
                          $('#myDynamicTable tbody').append(tr);
                        }
                    },
                    () => {
                      console.log("Bad Request");
              });
      });
        response = function(no) {
        var currentElementId = "div"+no;
        $("#"+currentElementId).toggle();
      }
})

$(() => {
      $('form').on('submit',(event) => {
              event.preventDefault(); //what is this and what it does?
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
              //'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + borough + limit
              $.ajax({
                url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=' + borough + limit + agency
              })
              .then( (data) => {
                var myTableDiv = document.getElementById("myDynamicTable");
                var table = document.createElement('TABLE');
                table.border='0';
                table.margin = 'auto';
                var tableBody = document.createElement('TBODY');
                $(table).append(tableBody);
                for (var i=0; i<Number(noOfcomplaints); i++){
                   var tr = document.createElement('TR');
                   $(tableBody).append(tr);
                   for (var j=0; j<2; j++){
                       var td = document.createElement('TD');
                       td.width='350';
                       console.log(data[i].resolution_description);
                       resolution_description = data[i].resolution_description;
                       console.log(resolution_description);
                       if(j==0){
                              $(td).append(document.createTextNode(data[i].complaint_type));
                       }
                       else if(j==1){
                         var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
                         console.log(resolution_description);
                         $(button).on('click', function (resolution_description) {
                                    console.log("clicking toggle");
                                    //$(button).hide();
                                    //console.log(data[i]);//resolution_description
                                    console.log(resolution_description);
                                     //alert("Hi back!");
                                });
                         $(td).append(button);//check
                       }

                       $(tr).append(td);
                   }

                }
              })
                $(myTableDiv).append(table);
                },
                () => {
                  console.log("Bad Request");
              })
      });
// });

// for (var j=0; j<2; j++){
//     var td = document.createElement('TD');
//     td.width='350';
//     console.log(data[i].resolution_description);
//     resolution_description = data[i].resolution_description;
//     console.log(resolution_description);
//     if(j==0){
//            $(td).append(document.createTextNode(data[i].complaint_type));
//     }
//     else if(j==1){
//       var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
//
//       console.log(resolution_description);
//       $(button).on('click', function (resolution_description) {
//                  console.log("clicking toggle");
//                  //$(button).hide();
//                  //console.log(data[i]);//resolution_description
//                  console.log(resolution_description);
//                   //alert("Hi back!");
//              });
//       $(td).append(button);//check
//     }
//
//     $(tr).append(td);
// }
//https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&$limit=1&$where=agency%20=%20%27NYPD%27
//https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&$limit=10&$where=agency%20=NYPD
// • borough
//https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN
// 	•	descriptor (which says what kind of complaint was made)
//  https://data.cityofnewyork.us/resource/erm2-nwe9.json?descriptor=Posted Parking Sign Violation
// 	•	agency: "NYPD" (because we only want complaints that were handled by the police department)
// https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD
// 	•	resolution_description (which says how the police handled the complaint)
//https://data.cityofnewyork.us/resource/erm2-nwe9.json?resolution_description=The Department
// of Transportation inspected this complaint and found that the problem was fixed.
// When the user clicks on one of the five buttons, a list of complaints
// should be displayed on the page, according to the number they input AND the borough they clicked on and only
// handled by the NYPD agency.
//$limit
//https://soda.demo.socrata.com/resource/4tka-6guv.json?$order=magnitude DESC&$limit=10
//agency
//https://soda.demo.socrata.com/resource/4tka-6guv.json?$where=magnitude > 3.0 AND source = 'pr'

                           //
                           // $('body').on('click', $buttons, function() {
                           //   //$(this).hide();
                           //   console.log("Clicked");
                           //   console.log(data[i].resolution_description);
                           //   //console.log(btnId);
                           //   //$btn.hide();
                           //   //console.log($(this.id));
                           //   // console.log(data);
                           //   // console.log(i);
                           //   // console.log(data[i].descriptor);
                           //   // console.log(data[i].resolution_description);
                           //   //$(this.id).hide();
                           //   //$(this.id).val(data[i].resolution_description);
                           //   //$(this.id).setAttribute("value", data[i].resolution_description);
                           //   //td.appendChild(document.createTextNode(data[i].resolution_description));
                           // //    alert("blabla");
                           // //console.log(data[i].resolution_description);
                           //});
                           //console.log(data[i].resolution_description));

//**************************************
// console.log(data);
// var myTableDiv = document.getElementById("myDynamicTable");
// var table = document.createElement('TABLE');
// table.border='0';
// table.margin = 'auto';
// var tableBody = document.createElement('TBODY');
// table.appendChild(tableBody);
// for (let i=0; i<Number(noOfcomplaints); i++){
//    var id = "id"+i;
//    var idFormatted = "'"+"#id"+i+"'";
//    var tr = document.createElement('TR');
//    tableBody.appendChild(tr);
//    for (let j=0; j<2; j++){
//        var td = document.createElement('TD');
//        td.width='350';
//        if(j==0){
//               td.appendChild(document.createTextNode(data[i].complaint_type));
//        }
//        else {
//          body = document.getElementsByTagName('body')[0],
//          buttons = document.createElement("input");
//          //Assign different attributes to the element.
//          console.log(id);
//          buttons.setAttribute("id", id);
//          buttons.setAttribute("class", "class1")
//          buttons.setAttribute("type", "submit");
//          buttons.setAttribute("value", "Toggle Police Response");
//          console.log("Buttons id is: "+buttons.id);
//          $('table').on('click', 'td', function() {
//            console.log("Clicked");
//            console.log(data[i].resolution_description);
//
//             //alert("blabla");
//          });
//          td.appendChild(buttons);//check
//        }
//
//        tr.appendChild(td);
//    }
// }
// myTableDiv.appendChild(table);
//
// //var button = $("<button>Toggle Police Response</button>");
// //var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
// body = document.getElementsByTagName('body')[0],
// button = document.createElement("input");
//          //Assign different attributes to the element.
//          button.setAttribute("type", "submit");
//          button.setAttribute("value", "Toggle Police Response");
//           button.setAttribute("onclick", "click()");
//          // function click() {
//          //   console.log("clicking toggle");
//          //   alert("Hi back!");
//          // }
//          // $('button').on('click', function() {
//          //            console.log("clicking toggle");
//          // //console.log(data[i].resolution_description);
//          //             alert("blabla");
//          //          });
// // button.click(function() {
// //   console.log("clicking toggle");
// //   alert("Hi back!");
// // });
// for (let i=0; i<Number(noOfcomplaints); i++){
// var tableData = data[i].complaint_type;
// console.log(data[i].complaint_type);
// console.log("clicked");
// var table = document.getElementById("myDynamicTable");
// $('#myDynamicTable tbody').append('<tr><td>'+tableData+'</td><td>'
//                                 +button+'</td></tr>');
// // $('#myDynamicTable tbody').append('<tr><td>'+tableData+'</td>');
// // //$('#myDynamicTable tbody tr td').append('<td>'+button+'</td></tr>');
// // $('#myDynamicTable tbody tr td').append(button);
// // $('#myDynamicTable tbody tr td').append('</td></tr>');
// // $('button').on('click', function() {
// //            console.log("clicking toggle");
// // //console.log(data[i].resolution_description);
// //             alert("blabla");
// //          });
//          button.click(function() {
//            console.log("clicking toggle");
//            alert("Hi back!");
//          });
//
// //td.appendChild(button);
// //var row = table.insertRow(i);
// // var cell1 = row.insertCell(0);
// // var cell2 = row.insertCell(1);
// // cell1.innerHTML = data[i].complaint_type;
// // cell2.innerHTML = "NEW CELL2";
// }


//
// $(tableBody).append(tr);
// var td1 = document.createElement('TD');
// $(tr).append(td1);
// td1.width='350';
// $(td1).append(document.createTextNode(data[i].complaint_type));
// var td2 = document.createElement('TD');
// $(tr).append(td2);
// var button = $('<input></input>').attr({'type': 'button'}).val("Toggle Police Response");
// $(button).on('click', function (resolution_description) {
//          console.log("clicking toggle");
//          console.log(resolution_description);
//                   //alert("Hi back!");
//  });
//  $(td2).append(button);//check
//  $(tr).append(td1);
//  $(tr).append(td2);

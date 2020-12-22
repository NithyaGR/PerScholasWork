

// var body = document.getElementsByTagName('body')[0],
//     // newlabel = document.createElement('label');   //create a div
//     // newlabel.id = 'newid';                      //add an id
//     // body.appendChild(newlabel); //append to the doc.body
//     newbutton = document.createElement('button');
//     newbutton.id = 'newbuttonid';
//     newbutton.className = 'buttons';
//     newbutton.value = "Toggle";
//     newbutton.width = "50px";
//     newbutton.height = "20px";
//     // newbutton.value = "Toggle Police Response";
    var body = document.getElementsByTagName('body')[0],
        element = document.createElement("input");
        //Assign different attributes to the element.
        element.setAttribute("type", "submit");
        element.setAttribute("value", "Toggle");
        element.setAttribute("id", "id1");
        //element.setAttribute("onclick", alert("blabla"));
        $('body').on('click', '#id1', function() {
           alert("blabla");
});

        //var foo = document.getElementById("fooBar");
        //Append the element in page (in span).
        body.appendChild(element);
        body = document.getElementsByTagName('body')[0],
            element1 = document.createElement("label");
            //element1.setAttribute("type", "text");
            element1.setAttribute("id", "id2");
            body.appendChild(element1);
            document.getElementById("id2").innerHTML = "Adding";
            addTable(10);
    //body.appendChild(newbutton);
    //body.insertBefore(newbutton,body.firstChild) //OR insert it

    function addTable(rows) {
      // var body = document.getElementsByTagName('body')[0],
      //     element = document.createElement("input");
   var myTableDiv = document.getElementById("myDynamicTable");

   var table = document.createElement('TABLE');
   //table.setAttribute("")
  //myTableDiv.appendChild(table);
   table.border='0';
   table.margin = 'auto';

   var tableBody = document.createElement('TBODY');
   table.appendChild(tableBody);

   for (var i=0; i<rows; i++){
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);

      for (var j=0; j<3; j++){
          var td = document.createElement('TD');
          td.width='75';
          td.appendChild(document.createTextNode("Cell " + i + "," + j));
          //td.appendChild(document.createTextNode("trying " + i + "," + j));
          tr.appendChild(td);
      }
   }
   myTableDiv.appendChild(table);

}

//     function createmyElements(id1,id2,id3){
//    return [
//            '<a href="some link" id="',
//             id1,
//            '">linktxt</a>',
//            '<div id="" ',
//             id2,
//            '"></div>',
//            '<someElement id="',
//             id3,
//            '"></someElement>'
//           ].join('\n');
// }
// for(let i=0; i<Number(noOfcomplaints); i++){
      //document.innerHTML = data[i].complaint_type;
      // var id1 = "id1"+i;
      // var id2 = "id2"+i;
      // var body = document.getElementsByTagName('body')[0],
      // element1 = document.createElement("label");
      // element1.setAttribute("id", id1);
      // body.appendChild(element1);
      // element1.innerHTML = "&nbsp";
      // document.getElementById(id1).innerHTML = data[i].complaint_type;
      // body = document.getElementsByTagName('body')[0],
      // element = document.createElement("input");
      // //Assign different attributes to the element.
      // element.setAttribute("type", "submit");
      // element.setAttribute("value", "Toggle Police Response");
      // element.setAttribute("id", id2);
//}




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
                  console.log(data);
                  var myTableDiv = document.getElementById("myDynamicTable");
                  var table = document.createElement('TABLE');
                  table.border='0';
                  table.margin = 'auto';
                  var tableBody = document.createElement('TBODY');
                  table.appendChild(tableBody);
                  for (var i=0; i<Number(noOfcomplaints); i++){
                     var id = "id"+i;
                     var tr = document.createElement('TR');
                     tableBody.appendChild(tr);
                     for (var j=0; j<3; j++){
                         var td = document.createElement('TD');
                         td.width='350';
                         if(j==0){
                                td.appendChild(document.createTextNode(data[i].complaint_type));
                         }
                         else if(j==1){
                           body = document.getElementsByTagName('body')[0],
                           buttons = document.createElement("input");
                           //Assign different attributes to the element.
                           buttons.setAttribute("id", id);
                           buttons.setAttribute("type", "submit");
                           buttons.setAttribute("value", "Toggle Police Response");
                           $('table').on('click', 'td', function() {
                             console.log("Clicked");
                              alert("blabla");
                           });
                           buttons.
                           //console.log(data[i].resolution_description));
                           td.appendChild(buttons);//check
                           //table.cell( i, j).data( 'Updated' ).draw();
                           table.getCell(( i, j )).innerHTML = "Working";
                         }

                         tr.appendChild(td);
                     }
                  }
                  myTableDiv.appendChild(table);
                },
                () => {
                  console.log("Bad Request");
              })
      })
})
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

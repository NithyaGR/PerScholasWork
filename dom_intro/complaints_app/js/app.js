
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
                  for (let i=0; i<Number(noOfcomplaints); i++){
                     var id = "id"+i;
                     var tr = document.createElement('TR');
                     tableBody.appendChild(tr);
                     for (let j=0; j<2; j++){
                         var td = document.createElement('TD');
                         td.width='350';
                         if(j==0){
                                td.appendChild(document.createTextNode(data[i].complaint_type));
                         }
                         else {
                           body = document.getElementsByTagName('body')[0],
                           buttons = document.createElement("input");
                           //Assign different attributes to the element.
                           buttons.setAttribute("id", id);
                           buttons.setAttribute("class", "class1")
                           buttons.setAttribute("type", "submit");
                           buttons.setAttribute("value", "Toggle Police Response");
                           $('body').on('click', this.id, function() {
                             console.log("Clicked");
                             // console.log(data);
                             // console.log(i);
                             // console.log(data[i].descriptor);
                             // console.log(data[i].resolution_description);
                             //$(this.id).hide();
                             //$(this.id).val(data[i].resolution_description);
                             //$(this.id).setAttribute("value", data[i].resolution_description);
                             //td.appendChild(document.createTextNode(data[i].resolution_description));
                           //    alert("blabla");
                           //console.log(data[i].resolution_description);
                           });
                           //console.log(data[i].resolution_description));
                           td.appendChild(buttons);//check
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

var input =10, amount =4 ;
var balance= input-amount;
var count=0, quarter=0;
while(count<=balance){
quarters = count*4;

  count++;
}
console.log("no. ofquarters : "+quarters);

/** declaration of the function calculateBalance
* This function takes two parameters which are total cash paid and
* the cost of the product.
* Returns the balance number of quarters need to be returned to the customer
*/
function calculateBalance(total, cost){
  var count=0, quarter=0;
  var balance = total-cost;
  while(count<=balance){
    quarters = count*4;
    count++;
  }
  return quarters;

}
//Calling the function - calculateBalance takes 2 arguments which are total amount paid and the actual cost
// of the product

var balanceQuarters;
balanceQuarters = calculateBalance(20,2);
console.log("The no. of Quarters is :"+balanceQuarters);

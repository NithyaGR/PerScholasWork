
/* * This is to calculate the largest denomination
 */

 var totalAmount =200, price =57.83 ;
 var balance= totalAmount-price;
 var initBalance = balance;
 var count=0, hundred=0, fifty=0, twenty=0, ten=0, five=0, two=0,one=0, cents=0;
 // Calling calculateDenomination to find no of fifties;

   fifty = calculateDenomination(balance, 50);
   console.log("There are "+fifty+" fifties");

   //calculating the new balance after denominating fifties
   balance = balance-(fifty*50);
   console.log("After denominating 50s the new balance is :"+balance);

   // Calculating 20s
   twenty = calculateDenomination(balance, 20)
   console.log("There are "+twenty+" twenties");

   balance = balance -(twenty*20);
   console.log("After denominating 20s the new balance is "+balance);

   //calculating 2s

   two = calculateDenomination(balance, 2);
   console.log("There are "+two+" twos");
   balance = balance-(two*2);
   console.log("After denominating 2s the new balance is "+balance);
   cents = covertCents(balance);
   console.log("Balance $"+ initBalance +" in larger denomination is "+ fifty+ "-50s: "+twenty+ "-20s: "+ two+"-2s: "+ cents+"-cents");


   function calculateDenomination(balance, denomination){
     var denominationCount = 0;
     while(balance>denomination){
       balance = balance/denomination;
       denominationCount += parseInt(balance);
     }
     return denominationCount;
   }
   /* *
    * This function converts the $ less than 1 into whole cents
    * */
   function covertCents(amount){
     return parseInt(amount*100);
   }
   function calculateBalance(){

   }

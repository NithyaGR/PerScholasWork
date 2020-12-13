

class VendingMachine{
  constructor(snacks){
  console.log("Inside the VM constructor :"+snacks);
  }
   vend(rowNum){
    console.log("rowNum - This is to return the row of the particular snacks "+rowNum);
    //console.log(this.snacks[rowNum]);
    //return this.snacks[rowNum];
   }

}
var name, price;
class Snacks{
  constructor(name, price){
    this.name= name;
    this.price = price;
  }
  // getSnackName(snack1){
  //   return this.name;
  // }
}
const snack1 = new Snacks("Lays",1.99);
const snack2 = new Snacks("Doritos",2.99);
const snack3 = new Snacks("Kitkat",1.50);
//console.log("Printing the snack Name: "+snack1.getSnackName(snack1));
const snacksArr = [snack1, snack2, snack3];
console.log("Printing snacksArr in main"+ snacksArr);
// const vendingMachine = new VendingMachine(snack1, snack2, snack3);
// vendingMachine.vend(1);


//
//Declared using const not under class
// const VendingMachine = {
//     snacks: [
//     {
//       name: 'Lays', price: 1.99
//     },
//     {
//        name: 'Doritos', price: 2.99
//      },
//     {
//       name: 'Kitkat', price: 0.99
//     }
//   ],
//   vend(rowNum){
//     console.log("Inside RowNum");
//     console.log(this.snacks[rowNum]);
//   }
// }
// VendingMachine.vend(2);

// declared by using class
// class VendingMachine {
//   constructor(snacks){
//     console.log(this.snacks);
//   }
//   vend(rowNum){
//     //console.log(this.snacks[rowNum]);
//   }
// }
// var snacks = [
// {
//   name: 'Lays',
//   price: 1.99
// },
// {
//    name: 'Doritos',
//    price: 2.99
//  },
// {
//   name: 'Kitkat',
//   price: 0.99
// }
// ]
// console.log(snacks);
// console.log(snacks[1]);
// var vm = new VendingMachine(snacks);
// vm.vend(1);

//*****************************************************************************
//declared using class and another class for snacks as well

class VendingMachine{
  constructor(snacks){
    this.snacks = snacks;
    console.log("Inside the VM constructor :"+snacks);
  }
  vend(rowNum){
    console.log(this.snacks[rowNum]);
  }
}
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
// console.log("Printing the snack Name: "+snack1.getSnackName(snack1));
const snacksArr = [snack1, snack2, snack3];
console.log("Printing snacksArr in main"+ snacksArr);
const vm = new VendingMachine(snacksArr);
vm.vend(0);

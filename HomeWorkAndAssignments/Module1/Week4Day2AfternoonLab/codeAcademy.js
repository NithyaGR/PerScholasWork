

// const inventory = {
//   sunglasses: 120,
//   pants: 1088,
//   bags: 1344
// };
//
// // Write your code below:
// const myExecutor = (resolve, reject) => {
//   if(inventory.sunglasses>0){
//     resolve('Sunglasses order processed.');
//     //console.log('Sunglasses order processed');
//   }
//   else {
//     reject('That item is sold out.');
//     //console.log('That item is sold out');
//   }
//
// }
//
// const myFirstPromise = new Promise(myExecutor);
//
// const orderSunglasses = () => {
//   return new Promise(myExecutor);
// }
//
//
// const orderPromise = orderSunglasses();
// console.log(orderPromise);
//
//
// console.log("This is the first line of code in app.js.");
// // Keep the line above as the first line of code
// // Write your code here:
// const usingSTO = () =>  {
//  console.log('Inside Using STO');
//   };
// setTimeout(usingSTO, 3000);
//
// //exercise
// let prom = new Promise((resolve, reject) => {
//   let num = Math.random();
//   if (num < .5 ){
//     resolve('Yay!');
//   } else {
//     reject('Ohhh noooo!');
//   }
// });
//
// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };
//
// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };
//
// prom.then(handleSuccess, handleFailure);
//
//
// //**************************************************
//
// const {checkInventory} = require('./library.js');
//
// const order = [['sunglasses', 1], ['bags', 2]];
//
// // Write your code below:
// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let inStock = order.every(item => inventory[item[0]] >= item[1]);
//       if (inStock) {
//         resolve(`Thank you. Your order was successful.`);
//       } else {
//         reject(`We're sorry. Your order could not be completed because some items are sold out.`);
//       }
//     }, 1000);
//   })
// };
//
// module.exports = { checkInventory };
// const handleSuccess = (resolve) => {
//     console.log(resolve);
// }
//
//
//
//
//
// // Keep the line below as the last line of code:
// console.log("This is the last line of code in app.js.");
//
//

//
// /* Adding js with jQuerry
// */
//
// const promise = $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
// });
// promise.then(
//       (data) => {
//         console.log(data);
//       },
//       () => {
//         console.log("bad request");
//       }
//
// );
//
//
// const checkInventory = (order) => {
//   return new Promise((resolve, reject) => {
//       let inStock = order.every(item => inventory[item[0]] >= item[1]);
//       if (inStock) {
//         resolve(`Thank you. Your order was successful.`);
//         } else {
//         reject(`We're sorry. Your order could not be completed because some items are sold out.`);
//       }
//     })
// };
//


//*******************************
// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };
// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };
//
//
// const checkInventory = (order) => {
//   return new Promise(resolve, reject)
//   .then(handleSuccess, handleFailure);
// };

//*************************************
// let prom = new Promise((resolve, reject) => {
//   let num = Math.random();
//   if (num < .5 ){
//     resolve('Yay!');
//   } else {
//     reject('Ohhh noooo!');
//   }
// });
//
// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };
//
// const handleFailure = (rejectionReason) => {
//   console.log(rejectionReason);
// };
//
// prom.then(handleSuccess, handleFailure);
//
//
//
// const callProm = (order) =>{
//   return new Promise((resolve, reject) => {
//      if(order<5){
//        resolve('Yes');
//      }
//      else{
//        reject('noooo!');
//      }
//   }).then(handleSuccess, handleFailure);
// }
// callProm(4);

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:


const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkInventory(order).then(handleSuccess, handleFailure)
// const checkInventory = (order) => {
// return new Promise((resolve, reject) => {
//       let inStock = order.every(item >= inventory[item[0]] >= item[1]);
//       if (inStock) {
//         resolve('Thank you. Your order was successful.');
//       } else {
//         reject('We re sorry. Your order could not be completed because some items are sold out.');
//       }
//     }).then(handleSuccess, handleFailure);
// }
// checkInventory(order);

// checkInventory(order).then(handleSuccess).catch(handleFailure);

//checkInventory(order)
// checkInventory(order)
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//   return processPayment(resolvedValueArray);
//
// })
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//   return shipOrder(resolvedValueArray);
//
// })
// .then((successMessage) => {
//   console.log(successMessage);
// })
// .catch((errorMessage) => {
//   console.log(errorMessage);
// });
//
// //*******************************************
// checkInventory(order)
//  .then((resolvedValueArray) => {
//   return processPayment(resolvedValueArray) })
//   .then((resolvedValueArray) => {
//    return shipOrder(resolvedValueArray)
// })
//   .then((successMessage) => {
//       console.log(successMessage);
//                     });
// //*********************************
// let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
//
//
//
//
//
// myPromises
//   .then((arrayOfValues) => {
//     console.log(arrayOfValues);
//   })
//   .catch((rejectionReason) => {
//     console.log(rejectionReason);
//   });

//****************
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');


Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);
  Awesome job! Promises are a difficult concept even for experienced developers, so pat yourself on the back. You’ve learned a ton about asynchronous JavaScript and promises. Let’s review:

Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
Promises can be in one of three states: pending, resolved, or rejected.
A promise is settled if it is either resolved or rejected.
We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
To use promise composition correctly, we have to remember to return promises constructed within a .then().
We should chain multiple promises rather than nesting them.
To take advantage of concurrency, we can use Promise.all().

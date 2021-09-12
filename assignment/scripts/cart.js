console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
  basket.push(item);
  return true;
}//end addItem

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Adding bananas (expect true)', addItem('bananas'));
console.log(`Basket is now ${basket}`);


function listItems() {
  for(let item of basket) {
    console.log(item);
  }//end for
}//end listItems
console.log('TEST - should say apple and banana on seperate lines and return undefined', listItems(basket));

function empty() {
  basket = [];
}
//empty()//for testing only
console.log('TEST - shoud show an empty array and return undefined', empty(), basket);

console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;


function addItem(item){
  if(isFull() === false){
  basket.push(item);
  return true;
  }//end if
  else {
    return false;
  }//end else
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

function isFull() {
  if(maxItems > basket.length) {
    return false;
  }//end if
  else {
    return true;
  }//end else
}//end isFull()

console.log(`Basekt is ${basket}`);
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log('Checking basket, (expect false)', isFull());
console.log('Adding bread (expect true)', addItem('bread'));
console.log('Adding butter (expect true)', addItem('butter'));
console.log('Adding milk and eggs (expect true)', addItem('milk'), addItem('eggs'));
console.log(`Basket is ${basket}`);
console.log('Checking basket, (expect true)', isFull());
console.log('Trying to add cereal (ezxpect false)', addItem('cereal'));

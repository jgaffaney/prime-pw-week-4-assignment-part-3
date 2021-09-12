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
console.log('TEST - shoud empty the basket and return undefined', empty(), basket);

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
console.log('Checking basket to see if it is full, (expect false)', isFull());
console.log('Adding bread and butter (expect true x2)', addItem('bread'), addItem('butter'));
console.log('Adding milk and eggs (expect true x2)', addItem('milk'), addItem('eggs'));
console.log(`Basket is ${basket}`);
console.log('Checking basket to see if it is full, (expect true)', isFull());
console.log('Trying to add cereal (expect false)', addItem('cereal'));
console.log(`Basket is ${basket}`);

function removeItem(item) {
  let indexToRemove = basket.indexOf(item);
  if(indexToRemove > -1) {
    basket.splice(indexToRemove, 1);
    return item;
    }//end if
      else{
      return null;
    }//end else
}//end removeItem

console.log('Removing butter (expect butter)', removeItem('butter'));
console.log(`Basket is ${basket}`);
console.log('Try to remove chocolate (expect null)', removeItem('chocolate'));
console.log(`Basket is ${basket}`);

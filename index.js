let shoppingListItem = [
  "Milk",
  "Cocoa",
  "Salad",
  "Carrots",
  "Tomatoes",
  "Ready meals",
];
let shoppingListItemPrice = [1.2, 2.0, 2.0, 2.0, 2.5, 5.0];
let totalPrice = 0;

let continueShopping = true;

while (continueShopping) {
  let item = prompt("What item do you want to add to your shopping list?");
  while (typeof item !== "string" || item.length === 0) {
    item = prompt("Please enter a valid item name:");
  }
  let price = Number(prompt("What is the price of this item?"));
  while (typeof price !== "number" || price.toString().length === 0 || price === NaN) {
    price = Number(prompt("Please enter a valid price:"));
  }

  shoppingListItem.push(item);
  shoppingListItemPrice.push(price);
  continueShopping = confirm(
    "Do you want to add another item to your shopping list?"
  );
}

console.log(`Your shopping basket consists of:
`);
for (let i = 0; i < shoppingListItem.length; i++) {
  totalPrice += shoppingListItemPrice[i];
  console.log(
    `   ${shoppingListItem[i]} - £${shoppingListItemPrice[i].toFixed(2)}`
  );
}
console.log("The amount you have to pay is: £" + totalPrice);

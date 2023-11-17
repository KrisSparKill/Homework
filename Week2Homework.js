const pizzaPlace = "Christy's House of Crust";
let numberOfToppings = 10;
console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
console.log(
  "Hello and welcome to " +
    pizzaPlace +
    " where you can have up to " +
    numberOfToppings +
    " toppings on your pie."
);
if (numberOfToppings <= 9) {
  console.log("Quality, not quantity.");}
    else {
      console.log("A whole lot of pizza.")
    }

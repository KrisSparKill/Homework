const pizzaToppings = ["pepperoni", "sausage", "olives", "pineapple", "ham"];

function greetCustomer() {
  console.log(
    "Welcome to Chris' House of Crust. Our available pizza toppings are:"
  );
  for (let topping of pizzaToppings) {
    console.log(topping);
  }
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size}, ${crust} crust pizza with ${toppings}, coming right up!`
  );
  return [size, crust, toppings];
}

function preparePizza(orderDetails) {
  console.log("Cooking Pizza");
  const pizza = {
    size: orderDetails[0],
    crust: orderDetails[1],
    toppings: orderDetails[2]
  };
  return pizza;
}

function servePizza(pizza) {
  console.log(
    "Order up! Here's your " +
      pizza.size +
      ", " +
      pizza.crust +
      " crust pizza with " +
      pizza.toppings +
      "."
  );
  return pizza;
}

greetCustomer();
const orderDetails = getPizzaOrder("large", "thin", "pepperoni", " and pineapple");
const pizza = preparePizza(orderDetails);
servePizza(pizza);

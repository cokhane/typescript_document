let cashInRegister: any = 0
let nextOrderId: any = 1
let nexPizzaId: any = 1
const orderHistory: Order[] = []

type Pizza = {
    id: number
    name: string
    price: number
}

type OrderType = "ordered" | "completed" | "cancelled";

type Order = {
    id: number
    pizza: string
    status: OrderType
}


let menu: Pizza[] = [
    { id: nexPizzaId++, name: "Margherita", price: 8 },
    { id: nexPizzaId++, name: "Pepperoni", price: 10 },
    { id: nexPizzaId++, name: "Hawaiin", price: 10 },
    { id: nexPizzaId++, name: "Veggie", price: 9 },
]

function addToArray<T>(array: T[], item: T): T[] | undefined {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, { id: nexPizzaId++, name: "Meat Lovers", price: 12 });
addToArray<Order>(orderHistory, { id: nexPizzaId++, pizza: "Meat Lovers", status: "completed" });

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizzaName = {
        id: nexPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizzaName)

    return newPizzaName
}

addNewPizza({  name: "Chicken Bacon Ranch", price: 11 });
addNewPizza({  name: "BBQ Chicken", price: 12 });
addNewPizza({  name: "Spicy Sausage", price: 11 });

function placeOrder(pizzaName: string): Order | undefined  {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        throw new Error("Pizza not found in the menu");
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza.name, status: "ordered"
     };
    orderHistory.push(newOrder);
    return newOrder
}

type orderType = {
    id: number;
    pizza: string;
    status: string;
}
 
function completeOrder(orderId: number): Order | null {
    const order = orderHistory.find(order => order.id === orderId);
    if (!order) {
        return null; // or throw an error
    }
    
    order.status = "completed";
    return order
}

type PizzaIdentifier = number | string;

 const getPizzaDetail = (identifier: PizzaIdentifier): Pizza | undefined => {
    if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else {
        throw new Error("Invalid identifier type");
    }
}

 


placeOrder("Chicken Bacon Ranch");
completeOrder(1)

console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderHistory);




export default getPizzaDetail
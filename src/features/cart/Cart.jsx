import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const jonasCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const fakeCart = [
  {
      itemId: "68daef0946472ce6cf668caa",
      name: "Royal Sunrise Espresso",
      quantity: 3,
      unitPrice: 1500,
      totalPrice: 4500
    },
  {
      itemId: "68daef0946472ce6cf668cb8",
      name: "Fresh Mango Juice",
      quantity: 3,
      unitPrice: 1500,
      totalPrice: 4500
    },
  {
      itemId: "68daef0946472ce6cf668cbf",
      name: "Glazed Doughnut",
      quantity: 2,
      unitPrice: 1000,
      totalPrice: 2000
    }
]

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map(item => <CartItem item={item} key={item.itemId} />)}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;

import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

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
  const username = useSelector(store => store.user.username)

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

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

import { useLoaderData } from "react-router-dom";

function Item() {
  const item = useLoaderData();

  return (
    <div>
      <img src={item.image} alt={item.name} width="200" />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ₦{item.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Item;

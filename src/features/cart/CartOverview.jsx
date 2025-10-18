import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-darkbrown-1 p-4 text-base uppercase flex items-center justify-between">
      <p className='font-semibold space-x-4 text-brown-1'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

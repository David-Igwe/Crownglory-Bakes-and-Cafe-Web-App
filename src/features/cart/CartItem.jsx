import Button from '../../ui/Button';
import {formatCurrency} from '../../utils/helpers'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItemQty, deleteItem, getCurrentQuantityById, increaseItemQty } from './cartSlice';

function CartItem({ item }) {
  const { itemId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(itemId));
  const dispatch = useDispatch();


  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
        <div className="flex gap-1 items-center md:gap-3">
          <Button type="round" onClick={() => dispatch(decreaseItemQty(itemId))}>-</Button>
          <span className="text-sm font-medium">{currentQuantity}</span>
          <Button type="round" onClick={() => dispatch(increaseItemQty(itemId))}>+</Button>
        </div>
        <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;

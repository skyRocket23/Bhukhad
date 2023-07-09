import { useSelector } from "react-redux";
import CartBox from "./CartBox";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap bg-sky-50">
      {items?.map((item) => <CartBox item={item} />)}
    </div>
  )
};

export default Cart;

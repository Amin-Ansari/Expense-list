import "./Cart.css";
import CartContent from "../DataComponents/CartContent";
export default function Cart(props) {
  return (
    <div className="cart">
      <CartContent
        className="cart-content"
        cartData={props.dynamicData}
      ></CartContent>
    </div>
  );
}

import "./CartContent.css";
import DateIndicator from "./DateIndicator";
import TitleIndicator from "./TitleIndicator";
import PriceIndicator from "./PriceIndicator";
export default function CartContent(props) {
  return (
    <div className="cart-content">
      <div>
        <DateIndicator date={props.cartData.date}></DateIndicator>
        <TitleIndicator title={props.cartData.title}></TitleIndicator>
      </div>
      <div>
        <PriceIndicator price={props.cartData.price}></PriceIndicator>
      </div>
    </div>
  );
}

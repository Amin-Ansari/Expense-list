import "./PriceIndicator.css";

export default function PriceIndicator(props) {
  return <div className="price-indicator">{props.price} $</div>;
}

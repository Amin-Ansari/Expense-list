import "./TitleIndicator.css";
export default function TitleIndicator(props) {
  return (
    <div className="title-indicator">
      <h2>{props.title}</h2>
    </div>
  );
}

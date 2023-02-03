import "./ChartBar.css";

export default function ChartBar(props) {
  let barHeight = "0%";
  if (props.value > 0) {
    barHeight = Math.floor((props.value / props.maxVal) * 100);
  }
  return (
    <div className="bar-container">
      <div className="bar-outer">
        <div
          className="bar-inner"
          style={{
            height: barHeight,
          }}
        ></div>
      </div>
      <div className="bar-label">
        <h6>{props.label}</h6>
      </div>
    </div>
  );
}

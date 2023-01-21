import "./DateIndicator.css";
export default function DateIndicator(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.getDate();

  return (
    <div className="date-indicator">
      <p className="month-date">{month}</p>
      <p className="year-date">{year}</p>
      <p className="day-date">{day}</p>
    </div>
  );
}

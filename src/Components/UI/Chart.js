import "../UI/Chart.css";
import ChartBar from "../DataComponents/ChartBar";
export default function Chart(prop) {
  let chartList = [
    { label: "Jan", vlaue: 0 },
    { label: "Feb", vlaue: 0 },
    { label: "March", vlaue: 0 },
    { label: "Apr", vlaue: 0 },
    { label: "May", vlaue: 0 },
    { label: "Jun", vlaue: 0 },
    { label: "Jul", vlaue: 0 },
    { label: "Aug", vlaue: 0 },
    { label: "Sep", vlaue: 0 },
    { label: "Oct", vlaue: 0 },
    { label: "Nov", vlaue: 0 },
    { label: "Dec", vlaue: 0 },
  ];
  if (prop.chartData.length > 0) {
    console.log(prop);
    prop.chartData.forEach(function (item) {
      const month = item.date.getMonth();
      chartList[month].vlaue += item.price;
    });
  }
  const maxValue = Math.floor(Math.max(...chartList.map((item) => item.vlaue)));
  return (
    <div className="chart-style">
      {chartList.map((bar, index) => {
        return (
          <ChartBar
            key={index}
            label={bar.label}
            value={bar.vlaue}
            maxVal={maxValue}
          ></ChartBar>
        );
      })}
    </div>
  );
}

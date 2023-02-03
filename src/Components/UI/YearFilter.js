import "./YearFilter.css";
import SelectInput from "../DataComponents/SelectInput";

export default function YearFilter(props) {
  const takeSelectValue = (takenValue) => {
    props.onTakingSelectValue(takenValue);
  };
  return (
    <div className="filter-wrapepr">
      <p>Filterd By Year</p>
      <SelectInput onValueTaking={takeSelectValue}></SelectInput>
    </div>
  );
}

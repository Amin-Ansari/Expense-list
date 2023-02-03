import "./YearFilter.css";
import SelectInput from "../DataComponents/SelectInput";

export default function YearFilter() {
  const takeSelectValue = (takenValue) => {
    console.log(takenValue);
  };
  return (
    <div className="filter-wrapepr">
      <p>Filterd By Year</p>
      <SelectInput onValueTaking={takeSelectValue}></SelectInput>
    </div>
  );
}

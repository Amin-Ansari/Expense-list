import "./SelectInput.css";

const SelectInput = (props) => {
  function returnValueOfSelect(ev) {
    props.onValueTaking(Number(ev.target.value));
  }
  return (
    <select className="selcet-appearance">
      <option value="0" onClick={returnValueOfSelect}>
        2020
      </option>
      <option value="1" onClick={returnValueOfSelect}>
        2021
      </option>
      <option value="2" onClick={returnValueOfSelect}>
        2022
      </option>
      <option value="3" onClick={returnValueOfSelect}>
        2023
      </option>
    </select>
  );
};
export default SelectInput;

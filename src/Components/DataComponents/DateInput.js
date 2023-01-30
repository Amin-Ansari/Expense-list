import { useState } from "react";
export default function DateInput(props) {
  const [inputValue, updateInputValue] = useState("");
  const exportInputData = (event) => {
    props.takeInputData(event.target.value);
  };
  return (
    <div>
      <label className="label-style">
        <span>Date</span>
        <input type={"date"} onChange={exportInputData}></input>
      </label>
    </div>
  );
}

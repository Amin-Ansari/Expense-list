import { useState } from "react";
export default function NumberInput(props) {
  const [inputValue, updateInputValue] = useState("");
  const exportInputData = (event) => {
    props.takeInputData(event.target.value);
  };
  return (
    <div>
      <label className="label-style">
        <span>Amount</span>
        <input
          type={"number"}
          min={0.1}
          step={0.1}
          onChange={exportInputData}
          value={props.value}
        ></input>
      </label>
    </div>
  );
}

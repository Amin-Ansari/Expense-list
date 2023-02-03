import { useState } from "react";
export default function TextInput(props) {
  const [inputValue, updateInputValue] = useState("");
  const exportInputData = (event) => {
    props.takeInputData(event.target.value);
  };
  return (
    <div>
      <label className="label-style">
        <span>Title</span>
        <input
          type={"text"}
          id="TitleInput"
          className="input-style"
          onChange={exportInputData}
          value={props.value}
        ></input>
      </label>
    </div>
  );
}

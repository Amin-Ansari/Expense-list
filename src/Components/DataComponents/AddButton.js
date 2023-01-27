import { useState } from "react";
import "./AddButton.css";

export default function AddButton(props) {
  const [inputValues, updateValues] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });
  const takeAllTheData = () => {
    const allInputs = document.querySelectorAll("input");
    updateValues((givenData) => {
      return {
        expenseTitle: allInputs[0].value,
        expenseAmount: allInputs[1].value,
        expenseDate: new Date(allInputs[2].value),
      };
    });
    props.onSaveDate(inputValues);
  };
  return (
    <div className="btn-container">
      <button className="add-btn" type="submit" onClick={takeAllTheData}>
        Add expense
      </button>
    </div>
  );
}

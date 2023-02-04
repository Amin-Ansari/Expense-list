import { useState } from "react";

import "./Form.css";
import TextInput from "../DataComponents/TextInput";
import NumberInput from "../DataComponents/NumberInput";
import DateInput from "../DataComponents/DateInput";
import AddButton from "../DataComponents/AddButton";
import AddNewExpense from "../DataComponents/AddNewExpense";

export default function Form(props) {
  const [title, updateTitle] = useState("");
  const [number, updateNumber] = useState("");
  const [date, updateDate] = useState("");
  const storeTextInput = (givenValue) => {
    updateTitle(givenValue);
  };
  const storeNumberInput = (givenValue) => {
    updateNumber(Number(givenValue));
  };
  const storeDateInput = (givenValue) => {
    updateDate(new Date(givenValue));
  };
  const formSubmission = (event) => {
    event.preventDefault();
    const allInputs = document.querySelectorAll("input");
    const valueList = [];
    for (let item of [title, number, date]) {
      if (!item) {
        alert("You can't submit empty inputs");
        break;
      } else {
        valueList.push(item);
      }
    }
    if (valueList.length == allInputs.length) {
      props.onLiftupData(...valueList.map((item) => item));
      allInputs.forEach((item) => (item.value = ""));
    }
  };
  function backToFirstContent() {
    updateContent(
      <div className="formContent">
        <AddNewExpense onChangeContent={switchContent}></AddNewExpense>
      </div>
    );
  }
  const switchContent = () => {
    updateContent(
      <div className="formContent">
        <TextInput takeInputData={storeTextInput}></TextInput>
        <NumberInput takeInputData={storeNumberInput}></NumberInput>
        <DateInput takeInputData={storeDateInput}></DateInput>
        <AddButton onReseting={backToFirstContent}></AddButton>
      </div>
    );
  };
  const [formContent, updateContent] = useState(
    <div className="formContent">
      <AddNewExpense onChangeContent={switchContent}></AddNewExpense>
    </div>
  );
  return (
    <form action="#" onSubmit={formSubmission}>
      {formContent}
    </form>
  );
}

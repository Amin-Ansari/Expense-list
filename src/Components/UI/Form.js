import { useState } from "react";

import "./Form.css";
import TextInput from "../DataComponents/TextInput";
import NumberInput from "../DataComponents/NumberInput";
import DateInput from "../DataComponents/DateInput";
import AddButton from "../DataComponents/AddButton";
import AddNewExpense from "../DataComponents/AddNewExpense";
import CancelButton from "../DataComponents/CancelButton";

export default function Form(props) {
  const [title, updateTitle] = useState("");
  const [number, updateNumber] = useState("");
  const [date, updateDate] = useState("");
  const storeTextInput = (givenValue) => {
    updateTitle(givenValue);
  };
  const storeNumberInput = (givenValue) => {
    updateNumber(givenValue);
  };
  const storeDateInput = (givenValue) => {
    updateDate(new Date(givenValue));
  };
  const formSubmission = (event) => {
    event.preventDefault();
    props.onLiftupData(title, number, date);
    updateTitle("");
    updateNumber("");
    updateDate("");
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
        <TextInput takeInputData={storeTextInput} value={title}></TextInput>
        <NumberInput
          takeInputData={storeNumberInput}
          value={number}
        ></NumberInput>
        <DateInput takeInputData={storeDateInput} value={date}></DateInput>
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

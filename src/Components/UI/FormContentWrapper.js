import "./FormContentWrapper.css";
import TextInput from "../DataComponents/TextInput";
import NumberInput from "../DataComponents/NumberInput";
import DateInput from "../DataComponents/DateInput";
import AddButton from "../DataComponents/AddButton";

export default function FormContentWrapper() {
  return (
    <div className="formContent">
      <TextInput></TextInput>
      <NumberInput></NumberInput>
      <DateInput></DateInput>
      <AddButton></AddButton>
    </div>
  );
}

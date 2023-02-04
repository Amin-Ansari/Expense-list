import "./AddButton.css";
import CancelButton from "./CancelButton";
export default function AddButton(props) {
  function swtichToFirstContent() {
    props.onReseting();
  }
  return (
    <div className="btn-container">
      <CancelButton
        className={"add-btn"}
        onCancel={swtichToFirstContent}
      ></CancelButton>
      <button className="add-btn" type="submit">
        Add expense
      </button>
    </div>
  );
}

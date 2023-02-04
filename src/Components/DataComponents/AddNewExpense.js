import "./AddNewExpense.css";
import "./AddButton.css";
export default function AddNewExpense(props) {
  function swtichContent() {
    props.onChangeContent();
    console.log("It works");
  }
  return (
    <div className="add-new-expense-wrapper">
      <button className="add-btn" type="button" onClick={swtichContent}>
        Add a new expese
      </button>
    </div>
  );
}

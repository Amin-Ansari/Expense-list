import "./AddButton.css";

export default function AddButton(props) {
  return (
    <div className="btn-container">
      <button className="add-btn" type="submit">
        Add expense
      </button>
    </div>
  );
}

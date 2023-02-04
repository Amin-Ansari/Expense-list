const CancelButton = (props) => {
  function cancelAdding() {
    props.onCancel();
  }
  return (
    <button
      type="button"
      className={props.className}
      style={{ margin: "0px 15px" }}
      onClick={cancelAdding}
    >
      Cancel
    </button>
  );
};
export default CancelButton;

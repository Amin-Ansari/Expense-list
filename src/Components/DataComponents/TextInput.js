export default function TextInput(props) {
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
        ></input>
      </label>
    </div>
  );
}

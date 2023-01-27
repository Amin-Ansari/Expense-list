export default function NumberInput() {
  return (
    <div>
      <label className="label-style">
        <span>Amount</span>
        <input type={"number"} min={0.1} step={0.1}></input>
      </label>
    </div>
  );
}

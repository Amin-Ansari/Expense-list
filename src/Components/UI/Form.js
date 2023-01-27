import FormContentWrapper from "./FormContentWrapper";
import "./Form.css";
export default function Form() {
  const formSubmission = (event) => {
    event.preventDefault();
  };
  const formData = (givenData) => {
    console.log(`Form had received`);
    console.log(givenData);
  };
  return (
    <form action="#" onSubmit={formSubmission}>
      <FormContentWrapper fillData={formData}></FormContentWrapper>
    </form>
  );
}

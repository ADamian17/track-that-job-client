import Form from "@/components/UI/Form";
import Email from "./Email";

const StepTwo: React.FC = (props) => {
  return (
    <>
      <Email />

      <Form.Input
        inputLabel="your password"
        name="password"
        type="password"
        autoComplete="on"
      />

      <Form.Input
        inputLabel="confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="on"
      />
    </>
  )
};

export default StepTwo;
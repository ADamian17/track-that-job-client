import Email from "./Email";
import Form from "@/components/UI/Form";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";

const StepTwo: React.FC = (props) => (
  <>
    <Email />
    <Password />
    <ConfirmPassword />
  </>
);

export default StepTwo;

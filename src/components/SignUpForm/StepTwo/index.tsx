import ConfirmPassword from "./ConfirmPassword";
import Email from "./Email";
import Password from "./Password";

const StepTwo: React.FC = (props) => (
  <>
    <Email />
    <Password />
    <ConfirmPassword />
  </>
);

export default StepTwo;

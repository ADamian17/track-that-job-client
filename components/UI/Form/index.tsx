import Input from "./Input"
import Controllers from "./Controllers"
import EmailInput from "./EmailInput"
import FieldGroup from "./FieldGroup"
import Indicators from "./Indicators"

import styles from './Form.module.scss'
import Fieldset from "./Fieldset"
import RadioInput from "./RadioInput"

type FormType = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

const Form = ({ children, ...rest }: FormType) => {
  return (
    <form className={styles.form} {...rest}>
      {children}
    </form>
  )
}

Form.Controllers = Controllers
Form.EmailInput = EmailInput
Form.FieldGroup = FieldGroup
Form.Fieldset = Fieldset
Form.Indicators = Indicators
Form.Input = Input
Form.RadioInput = RadioInput

export default Form;

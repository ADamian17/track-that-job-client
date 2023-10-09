import Input from "./Input"
import Select from "./Select"

import styles from './Form.module.scss'
import EmailInput from "./EmailInput"
import FieldGroup from "./FieldGroup"

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

Form.Input = Input
Form.Select = Select
Form.EmailInput = EmailInput
Form.FieldGroup = FieldGroup

export default Form;

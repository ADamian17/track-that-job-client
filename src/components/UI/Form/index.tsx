import Input from "./Input"
import Select from "./Select"

import styles from './Form.module.scss'
import EmailInput from "./EmailInput"

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

export default Form;

import Input from "./Input"
import Select from "./Select"

import styles from './Form.module.scss'

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

export default Form;

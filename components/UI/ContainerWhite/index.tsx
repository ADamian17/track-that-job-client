import styles from "./ContainerWhite.module.scss"

type ContainerWhiteProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const ContainerWhite: React.FC<ContainerWhiteProps> = ({ children, className, ...rest }) => (
  <div className={`${styles.container} ${className}`} {...rest}>
    {children}
  </div>
)

export default ContainerWhite;

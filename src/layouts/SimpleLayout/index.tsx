import GoBackButton from '@/components/UI/Buttons/GoBackButton';
import LinkButton from "@/components/UI/Buttons/LinkButton";

import style from "./SimpleLayout.module.scss";

type SimpleLayoutProps = {
  children: React.ReactNode;
  editButton?: {
    buttonText: string
    buttonUrl: string
  }
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, editButton }) => {
  const showEditBtn = editButton?.buttonText && editButton.buttonUrl;
  const editBtn = showEditBtn && (
    <LinkButton
      href={editButton.buttonUrl}
      variant="is-secondary"
    >
      {editButton?.buttonText}
    </LinkButton>
  )

  return (
    <main className={style.simpleLayout}>
      <nav className={style.simpleLayoutNav}>
        <GoBackButton />

        {editBtn}
      </nav>

      {children}
    </main>
  )
}

export default SimpleLayout

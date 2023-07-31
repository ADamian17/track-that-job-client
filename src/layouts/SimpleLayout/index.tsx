import GoBackButton from '@/components/UI/Buttons/GoBackButton';
import LinkButton from "@/components/UI/Buttons/LinkButton";

import style from "./SimpleLayout.module.scss";

type SimpleLayoutProps = {
  children: React.ReactNode;
  editJobUrl?: string
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, editJobUrl }) => {
  return (
    <main className={style.simpleLayout}>
      <nav className={style.simpleLayoutNav}>
        <GoBackButton />

        {
          editJobUrl && (
            <LinkButton
              href={editJobUrl}
              variant="is-secondary"
            >
              Edit Job
            </LinkButton>
          )
        }
      </nav>

      {children}
    </main>
  )
}

export default SimpleLayout
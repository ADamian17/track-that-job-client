import GoBackButton from '@/components/UI/Buttons/GoBackButton';
import LinkButton from "@/components/UI/Buttons/LinkButton";

import style from "./SimpleLayout.module.scss";

type SimpleLayoutProps = {
  children: React.ReactNode;
  withEditJob?: boolean;
}

const SimpleLayout: React.FC<SimpleLayoutProps> = ({ children, withEditJob }) => {
  return (
    <main className={style.simpleLayout}>
      <nav className={style.simpleLayoutNav}>
        <GoBackButton />

        {
          withEditJob && (
            <LinkButton
              href="/edit-job/"
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
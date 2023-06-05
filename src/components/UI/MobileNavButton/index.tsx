import { useEffect } from 'react';
import styles from './MobileNavButton.module.scss';
import useMobileSidebarStore from '../../../zustand/useMobileSidebarStore';

const MobileNavButton = () => {
  const { showNav, setShowNav } = useMobileSidebarStore(state => state)
  const icon = showNav ? "icon-close" : "icon-hamburger"

  useEffect(() => {
    return () => {
      setShowNav(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <svg onClick={handleClick} className={styles.menuIcon}>
      <use href={`/assets/shared/mobile/menu-icons.svg#${icon}`}></use>
    </svg>
  );
};

export default MobileNavButton;

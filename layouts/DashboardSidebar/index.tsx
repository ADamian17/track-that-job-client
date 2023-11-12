import React, { useEffect } from 'react';

import DashboardHeader from '@/components/DashboardHeader';
import useMobileSidebarStore from '../../zustand/useMobileSidebarStore';
import useWindowSize from '@/hooks/useWindowSize';

import styles from "./DashboardSidebar.module.scss"
import DashboardItem from '@/components/DashboardItem';
import DashboardAside from '@/components/DashboardAside';

const DashboardSidebar = () => {
  const { showNav, resetShowNav } = useMobileSidebarStore(state => state)
  const { width: windowWidth } = useWindowSize()

  const headerStyles = `${styles.dashboardHeaderWrapper} ${showNav && styles.activeNav}`;

  useEffect(() => {
    if (windowWidth >= 768) {
      resetShowNav()
    }
  }, [windowWidth, resetShowNav])

  return (
    <nav className={styles.dashboardSidebar}>
      <header className={headerStyles}>
        <DashboardHeader />

        <DashboardAside className={styles.navAside} />
      </header>
    </nav>
  )
}

export default DashboardSidebar;
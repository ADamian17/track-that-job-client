import React from 'react';
import Head from 'next/head';

import DashboardSidebar from '../DashboardSidebar';

import styles from './DashboardLayout.module.scss';
import DashboardContent from '../DashboardContent';

type DashboardLayoutType = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutType> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Track that job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>Track that job | dashboard</title>
      </Head>

      <main className={styles.mainLayout}>
        <section className={styles.dashboard}>
          <DashboardSidebar />

          <DashboardContent>
            {children}
          </DashboardContent>
        </section>
      </main>
    </>
  );
};

export default DashboardLayout;

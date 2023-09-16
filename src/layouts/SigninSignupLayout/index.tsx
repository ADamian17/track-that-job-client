import React from 'react';

import style from './SigninSignupLayout.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import ContainerWhite from '@/components/UI/ContainerWhite';

type SigninSignupLayoutProps = {
  formHeading: string;
  redirectCopy: string;
  ctaText: string;
  ctaLink: string;
  children: React.ReactNode;
  location: string;
};

const SigninSignupLayout: React.FC<SigninSignupLayoutProps> = ({
  children,
  ctaLink,
  ctaText,
  formHeading,
  location,
  redirectCopy,
}) => (
  <>
    <Head>
      <title>Track That Job | {location}</title>
    </Head>

    <section className={style.container}>
      <ContainerWhite className={style.contentWrapper}>

        <h1 className={style.headline}>
          Track that Job
        </h1>

        <h4 className={style.subcopy}>{formHeading}</h4>

        {children}

        <p className={style.redirectCopy}>
          {redirectCopy} <Link href={ctaLink}>{ctaText}</Link>
        </p>
      </ContainerWhite>
    </section>
  </>
);

export default SigninSignupLayout;

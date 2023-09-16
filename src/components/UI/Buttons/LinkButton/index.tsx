import React from 'react';
import Link, { LinkProps } from 'next/link';

import linkBtnStyles from './LinkButton.module.scss';
import { Buttons } from '@/types';

const LinkButton: React.FC<
  Buttons.LinkProps &
  LinkProps
> = ({
  children,
  extraClasses,
  href,
  variant,
  ...rest
}) => (
    <Link
      href={href}
      className={`${linkBtnStyles.btn} ${variant && linkBtnStyles[variant]} ${extraClasses}`}
      {...rest}
    >
      {children}
    </Link>
  );

export default LinkButton;

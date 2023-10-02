import React from 'react';

import btnStyles from './ButtonsGroup.module.scss';

type ButtonsGroupProps = {
  children: React.ReactNode;
  className?: string;
}

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({
  children,
  className,
}) => (
  <div className={`${btnStyles.group} ${className}`}>
    {children}
  </div>
);

export default ButtonsGroup;

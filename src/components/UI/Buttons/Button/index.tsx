import React from 'react';

import btnStyles from './Button.module.scss';

type ButtonVariants =
  | 'is-primary'
  | 'is-secondary'
  | 'is-info'
  | 'is-danger'
  | 'is-link';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  variant?: ButtonVariants;
  extraClasses?: string;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  isLoading,
  extraClasses,
  ...rest
}) => {
  const btnVariant = variant ? btnStyles[variant] : '';

  return (
    <button
      className={`${btnStyles.btn} ${btnVariant} ${isLoading && btnStyles.isLoading} ${extraClasses}`}
      {...rest}
    >
      {isLoading && (
        <span className={`${btnStyles.smooth} ${btnStyles.spinner}`} />
      )}
      {text}
    </button>
  );
};

export default Button;

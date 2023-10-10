import React from 'react';

import styles from './FieldWrapper.module.scss';

export type InputProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

const FieldGroup: React.FC<InputProps> = ({
  children,
}) => (
  <div className={styles.groupField}>
    {children}
  </div>
);

FieldGroup.displayName = "FieldGroup"

export default FieldGroup;

import React from "react";

import { useRouter } from "next/router";

import styles from "./GoBackButton.module.scss";

type GoBackButtonType = {};

const GoBackButton: React.FC<GoBackButtonType> = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.back()
  }

  return (
    <button
      onClick={handleClick}
      className={styles.goBackBtn}
    >
      <svg className={styles.icon}>
        <use href="/icons/arrows.svg#left"></use>
      </svg>

      go back
    </button>
  )
};

export default GoBackButton;

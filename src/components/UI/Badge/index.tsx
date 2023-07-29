import React from "react";
import { useRouter } from "next/router";
import styles from "./Badge.module.scss";
import Link from "next/link";

type BadgeType = {
  badgeText: string;
};

const Badge: React.FC<BadgeType> = ({ badgeText }) => (
  <span className={styles.badge}>
    {badgeText}
  </span>
)

export default Badge;
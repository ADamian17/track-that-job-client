import React from "react";
import { useRouter } from "next/router";
import styles from "./Badge.module.scss";
import Link from "next/link";

type BadgeType = {
  badgeText: string;
  className?: string
};

const Badge: React.FC<BadgeType> = ({ badgeText, className }) => (
  <span className={`${styles.badge} ${className}`}>
    {badgeText}
  </span>
)

export default Badge;
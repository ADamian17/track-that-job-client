import React from "react";
import { useRouter } from "next/router";
import styles from "./Badge.module.scss";
import Link from "next/link";

type BadgeType = {
  badgeText: string;
  badgeLink: string;
  active?: boolean
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
};

const Badge: React.FC<BadgeType> = ({ badgeText, badgeLink, active, handleClick }) => (
  <Link
    href={badgeLink || ''}
    className={`${styles.badge} ${active && styles.active}`}
    onClick={handleClick}
  >
    {badgeText}
  </Link>
)

export default Badge;
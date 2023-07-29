import React from "react";
import Link from "next/link";

import styles from "./BadgeWithLink.module.scss";

type BadgeType = {
  badgeText: string;
  badgeLink: string;
  active?: boolean
  handleClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
};

const BadgeWithLink: React.FC<BadgeType> = ({ badgeText, badgeLink, active, handleClick = null }) => (
  <Link
    href={badgeLink || ''}
    className={`${styles.badge} ${active && styles.active}`}
    onClick={handleClick!}
  >
    {badgeText}
  </Link>
)

export default BadgeWithLink;
import React, { FC, useState } from "react";
import styles from "../../styles/ItemsList.module.scss";

interface ICatListItem {
  active: boolean;
  onClick: () => void;
}

export const CatListItem: FC<ICatListItem> = ({ children, active, onClick }) => {
  const activeStr = ` ${styles.itemsList__item__label_active}`;
  let styleStr = styles.itemsList__item__label;
  if (active) {
    styleStr += activeStr;
  }

  return <li onClick={onClick} className={styleStr}>{children}</li>;
};

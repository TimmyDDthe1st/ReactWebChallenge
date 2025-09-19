import React from "react";

import styles from "./card.module.css";

type CardProps = React.PropsWithChildren<{}>;

export function Card({ children }: CardProps) {
  return (
    <div className={styles.container} data-testid="CardContainer">
      {children}
    </div>
  );
}

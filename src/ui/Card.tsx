import React from "react";

import styles from "./Card.module.css";

type CardProps = React.PropsWithChildren<{}>;

export const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<div className={styles.container} data-testid="CardContainer">
			{children}
		</div>
	);
};

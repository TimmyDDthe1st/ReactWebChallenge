import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import styles from "./AppLayout.module.css";

export const WebApp: React.FC = () => {
	return (
		<div className={styles.appContainer}>
			<header className={styles.headerBar}>
				<nav className={styles.navbar}>
					<NavLink to="/" className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
						Home
					</NavLink>
				</nav>
			</header>
			<main className={styles.mainContent}>
				<Outlet />
			</main>
		</div>
	);
};

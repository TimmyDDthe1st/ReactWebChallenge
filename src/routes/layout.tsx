import { Outlet, NavLink } from "react-router-dom";

import styles from "./layout.module.css";

export function RootLayout() {
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

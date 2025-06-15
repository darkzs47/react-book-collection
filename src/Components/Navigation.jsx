import styles from "../Layouts/header.module.css";
import {NavLink, useLocation} from "react-router-dom";
import RouterPath from "../Routes.js";

const Navigation = () => {
    const location = useLocation();

    return (
        <>
            <nav>
                <ul className={styles.navList}>
                    {RouterPath.map((item) => (
                        <li className={styles.navItem}
                            key={item.path}
                        >
                            <NavLink
                                className={`${styles.link} ${
                                    location.pathname === item.path ? styles.active : ''
                                }`}
                                to={item.path}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navigation;
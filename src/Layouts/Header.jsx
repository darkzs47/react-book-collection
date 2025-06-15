import Navigation from '../Components/Navigation.jsx';
import styles from './header.module.css';
import HeaderSearch from "../Components/HeaderSearch.jsx";
import CounterBadger from "../Components/CounterBadger.jsx";
import ThemeChanger from "../Components/ThemeChanger.jsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <Navigation/>

            <h3>
                Коллекция книг
            </h3>

            <div className={styles.lastDiv}>
                <HeaderSearch/>
                <CounterBadger/>
                <ThemeChanger/>
            </div>
        </header>
    );
};

export default Header;
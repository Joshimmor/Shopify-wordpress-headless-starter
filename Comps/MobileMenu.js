
import {useState} from "react";
import classnames from 'classnames';
import styles from "../styles/MobileMenu.module.css";

const MobileMenu = () => {
    const [menuButton , setMenu] = useState(true);
    return (
        <div className={menuButton ? styles.container : classnames(styles.change, styles.container)} onClick={() => setMenu(!menuButton)}>
            <div className={ styles.bar1 }></div>
            <div className={ styles.bar2 }></div>
            <div className={styles.bar3 }></div>
        </div>
    )
}

export default MobileMenu;
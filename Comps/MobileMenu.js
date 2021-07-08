
import {useState} from "react";
import classnames from 'classnames';
import MenuSlider from "./MenuSlider";
import styles from "../styles/MobileMenu.module.css";

const MobileMenu = () => {
    const [menuButton , setMenu] = useState(true);
    return (
        <div className={menuButton ? styles.container : classnames(styles.change, styles.container)} onClick={() => setMenu(!menuButton)}>
            <div className={ styles.bar1 }></div>
            <div className={ styles.bar2 }></div>
            <div className={styles.bar3 }></div>
            <MenuSlider menuButton={menuButton}  setMenu={setMenu}/>
        </div>
    )
}

export default MobileMenu;
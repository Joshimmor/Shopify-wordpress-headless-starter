import Link from "next/link";
import { useState } from 'react';
import MobileMenu from "./MobileMenu";

const NavWrapper = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    position: "fixed",
    top: "0",
    left: "0",
    justifyContent: "space-between",
    alignItems:"center"
}
const menuWrapper ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight:"5vw"
}
const mobileMenuWrapper ={
    display:"none"
}
const menuButton ={
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginRight:"5vw"
}
const menuItems = {
    paddingLeft:"40px"
}
const logoWrapper = {
    display: "flex",
    flexDirection: "row",
    marginLeft:"5vw"
}
const logoStyles = {
    fontSize:"1.3rem",
    fontWeight:"Bold"
}

const Navbar = (props) => {
    const [navState, setNav] = useState(false);
    
    return(
    <div style={NavWrapper}>
        <div style={logoWrapper}>
            <Link href="/" >
                <a style={logoStyles}>
                    Logo
                </a>
            </Link>
        </div>
        <ul style={props.size.width < 600  ? mobileMenuWrapper : menuWrapper}>
            <l1 style={menuItems}>
                <Link href="/">
                    Shop
                </Link>
            </l1>
            <l1 style={menuItems}>
                <Link href="/">
                    Blog
                </Link>
            </l1>
            <l1 style={menuItems}>
                <Link href="/">
                    Cart
                </Link>
            </l1>
        </ul>
        <div style={props.size.width > 600  ? mobileMenuWrapper : menuButton}>
                <MobileMenu/>
        </div>
    </div>
)};


export default Navbar;
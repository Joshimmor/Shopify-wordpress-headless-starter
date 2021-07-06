import Link from "next/link";
import {useState} from "react";
import Cart from "./Cart";

const MenuSliderStyles = {
    position:"absolute",
    left: "0",
    display:"flex",
    flexDirection: "column",
    height:"70vh",
    width: "100%",
    backgroundColor: "white",
    transition: " all 0.2s ease-in-out",
    justifyContent: "center",
    alignItems:"center",
    zIndex: "2"
}
const MenuSliderClosed = {
    position:"absolute",
    left: "0",
    display:"flex",
    flexDirection: "column",
    height:"0vh",
    width: "100%",
    backgroundColor: "white",
    transition: " all 0.3s ease-in-out"
}
const menuBox = {
    display:"flex",
    flexDirection: "column",
    height:"100%",
    justifyContent:"space-between"
}
const MenuClosed= {
    display:"none"
}
const menuItems = {
    fontWeight: "bold",
    textDecoration: "none"
}
const MenuSlider = ({menuButton}) => {
    const [cartButton, setCart] = useState(true);
    return(
        <div style={menuButton ?  MenuSliderClosed: MenuSliderStyles}>
           <ul style={menuButton ?  MenuClosed: menuBox}>
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
                <a onClick={()=>{setCart(!cartButton)}}>
                    Cart
                </a>
            </l1>
        </ul>
        <Cart cartButton={cartButton}/>
        </div>
    )
}
export default MenuSlider
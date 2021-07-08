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
const MenuSlider = ({menuButton,  setMenu}) => {
    return(
        <div style={menuButton ?  MenuSliderClosed: MenuSliderStyles}>
           <ul style={menuButton ?  MenuClosed: menuBox}>
            <l1 style={menuItems}>
                <Link href="/shop" onClick={()=>  setMenu(!menuButton)}>
                    Shop
                </Link>
            </l1>
            <l1 style={menuItems}>
                <Link href="/" onClick={()=>  setMenu(!menuButton)}>
                    Blog
                </Link>
            </l1>
            <l1 style={menuItems}>
                <Link href="/cart" onClick={()=>  setMenu(!menuButton)}>
                    Cart
                </Link>
            </l1>
        </ul>
        </div>
    )
}
export default MenuSlider
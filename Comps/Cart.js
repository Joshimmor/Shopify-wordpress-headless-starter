import Link from "next/link";

const cartSliderStyles = {
    position:"absolute",
    left: "0",
    display:"flex",
    flexDirection: "column",
    height:"70vh",
    width: "100%",
    backgroundColor: "white",
    transition: " all 0.2s ease-in-out",
    zIndex: "3"
}
const cartSliderClosed = {
    position:"absolute",
    left: "0",
    display:"flex",
    flexDirection: "column",
    height:"70vh",
    width: "0",
    backgroundColor: "white",
    transition: " all 0.3s ease-in-out"
}
const cartControls = {
    display:"flex",
    flexDirection: "row",
    height:"20%",
    width: "100%",
  
}

const Cart = ({cartButton}) => {
    return(
        <div style={cartButton ?  cartSliderClosed: cartSliderStyles}>
           <div className={cartControls}></div>
        </div>
    )
}
export default Cart
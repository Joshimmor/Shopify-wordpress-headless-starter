
const cartSliderStyles = {
    position:"absolute",
    left: "0",
    display:"flex",
    flexDirection: "column",
    height:"70vh",
    width: "100%",
    backgroundColor: "white",
    transition: " all 0.3s ease-in-out",
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
    alignItem:"end"
  
}

const Cart = ({cartButton, setCart}) => {
    return(
        <div style={cartButton ?  cartSliderClosed: cartSliderStyles}>
           <div className={cartControls}>
               <a className="" onClick={()=>setCart(!cartButton)}>Close</a>
           </div>
        </div>
    )
}
export default Cart
import React, { Component } from 'react'
const itemRow = {
    dispay: "flex",
    flexDirection: "Row"
}
export default class LiveCart extends Component {
   
    render() {
        return (
            <div>
                {this.props.lineItems.map((n, i) => (
                    <CartItem key={i}/>
                ))}
            </div>
        )
    }
}

//Destructor Items and map to list
function CartItem() {
    return (
        <div>
            
        </div>
    )
}

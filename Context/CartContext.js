import {client} from './ShopifyClientContext';
import React, {createContext, Component } from 'react';



export const CartContext = createContext();

// window.addEventListener("resize", handleResize);

export default class CartContextProvider extends Component {
    state = {
         cartId : "",
         client: null,
         lineItems: []
    }
    async getLineItems(){
        const lineItems = await client.checkout.fetch(this.cartId);
        console.log(lineItems)
        return lineItems
    };
    async componentDidMount(){
           client.checkout.create().then((checkout) => {
            // Do something with the checkout
            console.log(checkout.id)
            this.setState(
                {cartId: checkout.id,
                 client: client,
                 lineItems: checkout.lineItems
                })
          });
    }
    render() {
        console.log(this.state.lineItems)
        return (
            <CartContext.Provider value={{...this.state}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}


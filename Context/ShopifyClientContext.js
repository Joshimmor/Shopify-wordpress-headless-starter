import Client from 'shopify-buy';
import React, {createContext, Component } from 'react';


// Initializing a client to return content in the store's primary language
 export const client = Client.buildClient({
  domain: process.env.STORE_FRONT_DOMAIN,
  storefrontAccessToken: process.env.ACCESS_TOKEN
});

export const ShopifyClientContext = createContext();

// window.addEventListener("resize", handleResize);

export default class ShopifyClientContextProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            store : [],
            first: 14
        }
        this.sortBy = this.sortBy.bind(this);
        //this.loadMore = this.loadMore.bind(this)
    }

    sortBy(e){
        console.log(e)
        client.product.fetchQuery({
            first: this.state.first,
            sortKey: e,
        }).then((products) => {
        // Do something with the products
        this.setState({store : products});
       });
    };
   /* loadMore(){
        let currentLoad = this.state.queryParms.first;
        this.setState({
            queryParms :{
                first: currentLoad += 10,
                sortKey: e,
                reverse: false}
        })
    }*/
    componentDidMount(){
        client.product.fetchQuery({
            first: this.state.first,
            sortKey: "BEST_SELLING",
        }).then((products) => {
        // Do something with the products
        //console.log(products)
        this.setState({store : products});
       });
    }

    render() {
        return (
            <ShopifyClientContext.Provider value={{store:this.state.store, sortBy:this.sortBy}}>
                {this.props.children}
            </ShopifyClientContext.Provider>
        )
    }
}


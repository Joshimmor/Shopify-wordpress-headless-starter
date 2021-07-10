import React, {createContext, Component } from 'react'

export const ShopContext = createContext();

// window.addEventListener("resize", handleResize);

export default class ShopContextProvider extends Component {
   state = {

   }
    
    componentDidMount(){
        //
    }
    render() {
        return (
            <ShopContext.Provider value={{...this.state}}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}


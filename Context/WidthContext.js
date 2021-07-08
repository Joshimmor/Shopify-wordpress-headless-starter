import React, {createContext, Component } from 'react'

export const WidthContext = createContext();

// window.addEventListener("resize", handleResize);

export default class WidthContextProvider extends Component {
    state = {
        innerWidth : 0
    }
    
    componentDidMount(){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        this.setState({innerWidth : window.innerWidth});
        window.addEventListener('resize', ()=>{
          this.setState({innerWidth : window.innerWidth})
        })
    }
    render() {
        return (
            <WidthContext.Provider value={{...this.state}}>
                {this.props.children}
            </WidthContext.Provider>
        )
    }
}


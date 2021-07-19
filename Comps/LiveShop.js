/* eslint-disable @next/next/no-img-element */
import React, { Component } from 'react';
import styles from "../styles/store.module.css";

export default class LiveShop extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            SearchStore: ""
        }
        this.handleChange = this.handleChange.bind(this);
      };

    handleChange(e){
        this.setState({SearchStore: e})
    }
    render() {
        console.log(this.state.SearchStore)
       // console.log(this.props.store)
        return (
            <div className={styles.Shop}>
                <ShopNaviBar handleChange={this.handleChange}  sortBy={this.props.sortBy} SearchStore={this.state.SearchStore} />
                <div className={styles.ShopDisplay}>
                        {this.state.SearchStore.length > 2 ? 
                        this.props.store.filter(n => n.title.toUpperCase().indexOf(this.state.SearchStore.toUpperCase()) >= 0).map((n,i) => {
                        let img  = n.images[0];
                        return(
                            <ShopItem srcPhoto={img.src} title={n.title} key={i}/>
                        )
                    }) 
                        : this.props.store.map((n,i) => {
                        let img  = n.images[0];
                        return(
                            <ShopItem srcPhoto={img.src} title={n.title} key={i}/>
                        )
                    })}
                </div>
               
            </div>
        )
    }
};
 
function ShopItem({srcPhoto,title}) {
     return (
         <div className={styles.ShopItem}>
            <img src={srcPhoto} alt={title}/>
            <h4 >{title}</h4>
         </div>
     )
 }
  function ShopNaviBar({handleChange,sortBy}){
      return(
          <div className={styles.ShopNavi}>
              <div className={styles.ShopNaviRow}>
                    <SearchBar handleChange={handleChange} sortBy={sortBy}/>
              </div>
                <hr className={styles.break}/>
          </div>
      )
  }
  function SearchBar({handleChange,sortBy}){
      
      return(
        <form>
                <label>
                <input type="text" onChange={event => handleChange(event.target.value)}  placeholder="Search" />
                </label>
                <label>
                <select name="sort" id="product-select" onChange={event => sortBy(event.target.value)}>
                    <option value="BEST_SELLING">Sort By</option>
                    <option value="RELEVANCE">Relevance</option>
                    <option value="PRICE">Price-Low to High</option>
                    <option value="BEST_SELLING">Best Selling</option>
                    <option value="CREATED_AT">Newest</option>
                </select>
                </label>
               
        </form>
      )
  }
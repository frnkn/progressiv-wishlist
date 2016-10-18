import React from 'react';
import Wishlist from './wishlist';

const products = [
  {product_id: 123, name: "Jeans", price: "12.23"},
  {product_id: 123, name: "Hose", price: "12.23"},
  {product_id: 123, name: "Pullover", price: "12.23"},
  {product_id: 123, name: "Hemd", price: "12.23"}
];

export default class App extends React.Component {



  render(){
    return(
      <div>
        <h1>A Progressive Wishlist App Based On React</h1>
        <Wishlist data={products}/>
      </div>
    );
  }
}

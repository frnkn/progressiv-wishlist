import React from 'react';
import WishlistItem from './wishlist-item.js';


export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    //this.state = props.products;
    console.log("PROPS", props.products);
    console.log("STATE", this.state);
  }
  /* Not used - Directly set in {} within render function
  renderWishlistItems() {
    let all_items = [];
    var idx = 0;
    for(let product of this.props.products){
      console.log("PUSH");
      all_items.push(
        <WishlistItem key={idx} product_id={product.product_id} name={product.name} price={product.price} />
      );
      idx++;
    }
    return all_items;

  }*/


  render() {
    return (
      <div>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product =>(
              <WishlistItem key={product.product_id} product_id={product.product_id} name={product.name} price={product.price} />
            ))}

          </tbody>
        </table>
      </div>
    );
  }
};

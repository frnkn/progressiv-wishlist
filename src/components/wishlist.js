import React from 'react';
import WishlistItem from './wishlist-item.js';


export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.data);
  }

  renderWishlistItems() {
    let all_items = [];
    for(let product of this.props.data){
      all_items.push(
        <WishlistItem product_id={product.product_id} name={product.name} price={product.price} />
      );
    }
    return all_items;
  }

  addWishlistItem() {
    let product = {
      product_id: "23",
      name: "New Product",
      price: "599.99"
    };

  }

  render() {
    return (
      <div>
        <button>Add a Wishlist Item</button>
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderWishlistItems()}
          </tbody>
        </table>
      </div>
    );
  }
};

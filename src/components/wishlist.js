import React from 'react';
import WishlistItem from './wishlist-item.js';


export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    console.log(props.data);
    this.addDummyProduct = this.addDummyProduct.bind(this);
  }

  renderWishlistItems() {
    let all_items = [];
    var idx = 0;
    for(let product of this.state.data){

      all_items.push(
        <WishlistItem key={idx} product_id={product.product_id} name={product.name} price={product.price} />
      );
      idx++;
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

  addDummyProduct() {
    let product = {
      product_id: "23",
      name: "New Product",
      price: "599.99"
    };
    console.log("Add Dummy Product");
    this.setState.products = {'hello': 'world'};
    console.log("sTATE", this.state);
  }

  render() {
    return (
      <div>
        <button onClick={this.addDummyProduct} className="button button-primary">Add Dummy Product</button>
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
            {this.renderWishlistItems()}
          </tbody>
        </table>
      </div>
    );
  }
};

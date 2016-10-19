import React from 'react';
import WishlistItem from './wishlist-item.js';


export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.data);
    this.addDummyProduct = this.addDummyProduct.bind(this);
  }

  renderWishlistItems() {
    let all_items = [];
    let products = this.props.data;
    all_items.maps
    /*
    for(let product of this.state.data){
      all_items.push(
        <WishlistItem product_id={product.product_id} name={product.name} price={product.price} />
      );
    }
    return all_items;*/
    map(); //add this here with map function; this must be indexed!
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

import React from 'react';
import WishlistItem from './wishlist-item.js';


export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>A Wishlist Test 2</div>
        <WishlistItem />
      </div>
    );
  }
};

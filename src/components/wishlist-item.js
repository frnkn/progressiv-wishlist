import React from 'react';

export default class WishlistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.product_id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
};

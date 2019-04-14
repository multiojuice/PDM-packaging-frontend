import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button } from '../baseComponents';

class BrowseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    }
  }
  
  componentDidMount() {
    this.getOrders();
  }

  getOrders() {
    fetch('http://localhost:8080/order')
      .then(resp => resp.json())
      .then(content => this.setState({content}));
  }

  render() {
    console.warn(this.state);
    return (
      <div>
          <p>New Order Info</p>
      </div>
    );
  }
}

export default BrowseOrder;
import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button, Table, TableHeader, TableData, TableRow } from '../baseComponents';

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

  renderData() {
    const arr = this.state.content.count > 101
    ? this.state.content.data.slice(0,100) : this.state.content.data;

    return arr.slice().map((item, index) => {
      return (
        <TableRow key={index}>
          <TableData>{item.orderID}</TableData>
          <TableData>{item.senderID}</TableData>
          <TableData>{item.receiverID}</TableData>
          <TableData>${item.cost}</TableData>
          <TableData>{item.complete === true ? 'Yes' : 'No'}</TableData>
          <TableData>{item.prePaid === true ? 'Yes' : 'No'}</TableData>
        </TableRow>
      );
    })
  }

  handleOnChange = (event) => {
    const {id, value} = event.target;
    this.setState({[id]: value})
  }

  render() {
    console.warn(this.state);
    return (
      <div>
        <RowFlex>
        <ColumnFlex>
            <p>OrderId:</p>
            <textarea id="orderID" onChange={this.handleOnChange}/>
          </ColumnFlex>
          <ColumnFlex>
            <p>Sender:</p>
            <textarea id="senderID" onChange={this.handleOnChange}/>
          </ColumnFlex>
          <ColumnFlex>
            <p>Receiver:</p>
            <textarea id="receiverID" onChange={this.handleOnChange}/>
          </ColumnFlex>
        </RowFlex>
        <Table>
          <thead>
            <tr>
              <TableHeader>OrderID</TableHeader>
              <TableHeader>SenderID</TableHeader>
              <TableHeader>ReceiverID</TableHeader>
              <TableHeader>Cost</TableHeader>
              <TableHeader>Complete</TableHeader>
              <TableHeader>PrePaid</TableHeader>
            </tr>
          </thead>
          <tbody>
            {this.state.content ? this.renderData() : null}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default BrowseOrder;
import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button, Table, TableHeader, TableData, TableRow } from '../baseComponents';

class BrowseOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      orderID: null,
      senderID: null,
      receiverID: null,
      isPrePaid: null,
      cost: null,
      completed: null
    }
  }
  
  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    let {orderID, senderID, receiverID, isPrePaid, cost, completed} = this.state;
    orderID = orderID !== '' && orderID !== null ? `orderID=${orderID}&` : '';
    senderID = senderID !== '' && senderID !== null ? `senderID=${senderID}&` : '';
    isPrePaid = isPrePaid !== '' && isPrePaid !== null ? `isPrePaid=${isPrePaid}&` : '';
    receiverID = receiverID !== '' && receiverID !== null ? `receiverID=${receiverID}&` : '';
    cost = cost !== '' && cost !== null ? `cost=${cost}&` : '';
    completed = completed !== '' && completed !== null ? `completed=${completed}&` : '';

    const str = orderID + senderID + isPrePaid + receiverID + cost + completed;
    console.warn(str);

    fetch(`http://localhost:8080/order?${str}`)
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
        <RowFlex>
        <ColumnFlex>
            <p>Is Pre-Paid</p>
            <Select id="isPrePaid" onChange={this.handleOnChange}>
              <option value="">Any</option>
              <option value="1">True</option>
              <option value="0">False</option>
            </Select>
          </ColumnFlex>
          <ColumnFlex>
            <p>Cost less than:</p>
            <textarea id="cost" onChange={this.handleOnChange}/>
          </ColumnFlex>
          <ColumnFlex>
            <p>Completed</p>
            <Select id="completed" onChange={this.handleOnChange}>
              <option value="">Any</option>
              <option value="1">True</option>
              <option value="0">False</option>
            </Select>
          </ColumnFlex>
        </RowFlex>
        <Button onClick={this.getOrders}></Button>
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
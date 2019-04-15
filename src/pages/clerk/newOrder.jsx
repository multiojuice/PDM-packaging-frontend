import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button } from '../baseComponents';

class NewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderID: null,
      receiverID: null,
      isPrePaid: null,
      cost: 10
    }
  }


  postOrder = () => {
    let {senderID, cost, isPrePaid, receiverID} = this.state;
    senderID = senderID !== '' && senderID !== null ? `senderID=${senderID}&` : '';
    isPrePaid = isPrePaid !== '' && isPrePaid !== null ? `isPrePaid=${isPrePaid}&` : '';
    receiverID = receiverID !== '' && receiverID !== null ? `receiverID=${receiverID}&` : '';
    cost = cost !== '' && cost !== null ? `cost=${cost}&` : '';

    const str = senderID + isPrePaid + receiverID + cost;
    console.warn(str);

    fetch(`http://localhost:8080/order/add?${str}`)
      .then(resp => resp.json())
      .then(content => this.setState({order: content}));
  }


  handleOnChange = (event) => {
    const {id, value} = event.target;
    this.setState({[id]: value})
  }

  render() {
    console.warn(this.state)
    return (
      <div>
        <ColumnFlex>
          <h2>New Order Info</h2>
        </ColumnFlex>
        <RowFlexClose>
          <ColumnFlex>
            <p>SenderID</p>
            <input onChange={this.handleOnChange} id="senderID"></input>
          </ColumnFlex>
          <ColumnFlex>
          <p>Receiver ID</p>
          <input onChange={this.handleOnChange} id="receiverID"></input>
          </ColumnFlex>
          <ColumnFlex>
            <p>Is pre-paid</p>
            <select onChange={this.handleOnChange} id="isPrePaid">
              <option value="">Choose</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </ColumnFlex>
        </RowFlexClose>

        <h2>Packages:</h2>

        <RowFlex>
          <h3>1.</h3>
          <ColumnFlex>
            <p>Weight:</p>
            <input></input>
          </ColumnFlex>
          <ColumnFlex>
            <p>Traits</p>
            <input></input>
          </ColumnFlex>
          <ColumnFlex>
            <p>Delivery Speed:</p>
            <input></input>
          </ColumnFlex>
        </RowFlex>
        <RowFlex>
          <h3>2.</h3>
          <ColumnFlex>
            <p>Weight:</p>
            <input></input>
          </ColumnFlex>
          <ColumnFlex>
            <p>Traits</p>
            <input></input>
          </ColumnFlex>
          <ColumnFlex>
            <p>Delivery Speed:</p>
            <input></input>
          </ColumnFlex>
        </RowFlex>

        <h3>Price: $24.10</h3>
        
        <div style={{padding:'40px'}}></div>
        <Button onClick={this.postOrder}>Submit</Button>
      </div>
    );
  }
}

export default NewOrder;
import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button, Table, TableHeader, TableData, TableRow } from '../baseComponents';

class CurrentDeliveries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      orderID: null,
      userID: 4,
      isPrePaid: null,
      cost: null,
      completed: null,
      to: 1,
      from: 8
    }
  }
  
  componentDidMount() {
    this.getStops();
  }

  getStops = () => {
    let {to} = this.state;

    fetch(`http://localhost:8080/tracking/stops?locationID=${to}`)
      .then(resp => resp.json())
      .then(content => this.filterObjects(content));
  }

  filterObjects(content) {
    console.error(content)
    if(content === null) return;
    content = content.data.filter(item => {

      return item.currentlocationID === parseInt(this.state.from)
    });
    console.warn('BOOM', content)
    this.setState({content});
  }

  renderData() {
    const arr = this.state.content.count > 101
    ? this.state.content.slice(0,100) : this.state.content;

    return arr.slice().map((item, index) => {
      return (
        <TableRow key={index}>
          <TableData>{item.trackingID}</TableData>
          <TableData>{item.upcominglocationName}</TableData>
          <TableData>{item.currentlocationName}</TableData>
          <TableData>{item.stopNumber}</TableData>
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
            <p>From ID:</p>
            <textarea id="from" onChange={this.handleOnChange}/>
          </ColumnFlex>
          <ColumnFlex>
            <p>To ID:</p>
            <textarea id="to" onChange={this.handleOnChange}/>
          </ColumnFlex>
        </RowFlex>

        <Button onClick={this.getStops}>Go!</Button>
        <Table>
          <thead>
            <tr>
              <TableHeader>TrackingID</TableHeader>
              <TableHeader>Next Location</TableHeader>
              <TableHeader>Current Location</TableHeader>
              <TableHeader>Stop Number</TableHeader>
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

export default CurrentDeliveries;
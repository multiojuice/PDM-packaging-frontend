import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button, Table, TableHeader, TableData, TableRow } from '../baseComponents';

class PackageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {
    this.getOrders();
  }

  getOrders = () => {
    console.warn(this.props);

    fetch(`http://localhost:8080/package/?orderID=${this.props.match.params.id}`)
      .then(resp => resp.json())
      .then(content => this.setState({content}));
  }

  renderData() {
    const arr = this.state.content.count > 101
    ? this.state.content.data.slice(0,100) : this.state.content.data;

    return arr.slice().map((item, index) => {
      return (
        <TableRow key={index}>
          <TableData>{item.packageID}</TableData>
          <TableData>{item.orderID}</TableData>
          <TableData>{item.weight}</TableData>
          <TableData>{item.statusDesc}</TableData>
          <TableData>{item.trait}</TableData>
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
        <Table>
          <thead>
            <tr>
              <TableHeader>PackageID</TableHeader>
              <TableHeader>OrderID</TableHeader>
              <TableHeader>Weight</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Traits</TableHeader>
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

export default PackageViewer;
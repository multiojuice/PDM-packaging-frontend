import React, {Component} from 'react';
import { Table, TableRow, TableHeader, TableData } from '../baseComponents';

class CurrentDeliveries extends Component {
  renderData() {
    const sampleData = [
      {
        orderID: '2',
        sender: 'yaboy',
        reciever: 'japple',
        status: 'completed'
      },
      {
        orderID: '10',
        sender: 'japple',
        reciever: 'slippy',
        status: 'completed'
      },
      {
        orderID: '12',
        sender: 'japple',
        reciever: 'soulja',
        status: 'In progress'
      }
    ]
    return sampleData.map(item => {
      return (
        <TableRow>
          <TableData>{item.orderID}</TableData>
          <TableData>{item.sender}</TableData>
          <TableData>{item.reciever}</TableData>
          <TableData>{item.status}</TableData>
        </TableRow>
      );
    })
  }

  render() {
    return (
      <Table>
        <TableRow>
          <TableHeader>OrderID</TableHeader>
          <TableHeader>Sender</TableHeader>
          <TableHeader>Receiver</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
        {this.renderData()}
      </Table>
    );
  }
}

export default CurrentDeliveries;
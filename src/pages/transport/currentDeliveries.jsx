import React, {Component} from 'react';
import { Table, TableRow, TableHeader, TableData } from '../baseComponents';

class CurrentDeliveries extends Component {
  renderData() {
    const sampleData = [
      {
        orderID: '12',
        current_stop: 'ROC',
        next_stop: 'BUF',
        destination: 'TOR',
        status: 'On route',
        track_id: '123'
      },
      {
        orderID: '4',
        current_stop: 'ROC',
        next_stop: 'BUF',
        destination: 'BUF',
        status: 'On route',
        track_id: '141'
      },
      {
        orderID: '11',
        current_stop: 'ROC',
        next_stop: 'BUF',
        destination: 'ALB',
        status: 'On route',
        track_id: '444'
      },
      {
        orderID: '5',
        current_stop: 'ROC',
        next_stop: 'BUF',
        destination: 'NIA',
        status: 'On route',
        track_id: '132'
      },
    ]
    return sampleData.map(item => {
      return (
        <TableRow>
          <TableData>{item.orderID}</TableData>
          <TableData>{item.current_stop}</TableData>
          <TableData>{item.next_stop}</TableData>
          <TableData>{item.destination}</TableData>
          <TableData>{item.status}</TableData>
          <TableData>{item.track_id}</TableData>
        </TableRow>
      );
    })
  }

  render() {
    return (
      <Table>
        <TableRow>
          <TableHeader>Order ID</TableHeader>
          <TableHeader>Current Stop</TableHeader>
          <TableHeader>Next Stop</TableHeader>
          <TableHeader>Destination</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Tracking ID</TableHeader>

        </TableRow>
        {this.renderData()}
      </Table>
    );
  }
}

export default CurrentDeliveries;
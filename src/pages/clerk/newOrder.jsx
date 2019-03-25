import React, { Component } from 'react';
import { ColumnFlex, RowFlexClose, Option, Select, RowFlex, Button } from '../baseComponents';

class NewOrder extends Component {
  render() {
    return (
      <div>
        <ColumnFlex>
          <p>New Order Info</p>
          <RowFlexClose>
            <Select>
              <Option>Size</Option>
            </Select>
            <Select>
              <Option>Weight</Option>
            </Select>
            <Select>
              <Option>Speed</Option>
            </Select>
          </RowFlexClose>
        </ColumnFlex>
        <ColumnFlex>
          <p>Destination</p>
          <textarea></textarea>
        </ColumnFlex>
        <RowFlex style={{justifyContent: 'space-around', marginTop: '20px'}}>
          <ColumnFlex>
            Sender Username
            <textarea></textarea>
          </ColumnFlex>
          <ColumnFlex>
            Receiver Username
            <textarea></textarea>
          </ColumnFlex>
        </RowFlex>
        <ColumnFlex>
          <p>Additional notes</p>
          <textarea></textarea>
        </ColumnFlex>
        <div style={{padding:'40px'}}></div>
        <Button>Submit</Button>
      </div>
    );
  }
}

export default NewOrder;
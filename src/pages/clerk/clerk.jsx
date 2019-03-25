import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
class Clerk extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <RowFlex>
          <Title>PDM Clerk</Title>
          <ButtonContainer>
            <Button>New Order</Button>
            <Button>Browse Orders</Button>
          </ButtonContainer>
        </RowFlex>
        <Switch>

        </Switch>
      </div>
    )
  }
}

export default Clerk;
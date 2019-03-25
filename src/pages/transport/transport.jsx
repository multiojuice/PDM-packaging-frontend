import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
class Transport extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <RowFlex>
          <Title>PDM Transports</Title>
          <ButtonContainer>
            <Button>Browse Deliveries</Button>
            <Button>Update Delivery</Button>
          </ButtonContainer>
        </RowFlex>
        <Switch>

        </Switch>
      </div>
    )
  }
}

export default Transport;
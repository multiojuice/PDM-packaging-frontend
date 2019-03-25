import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
import CurrentDeliveries from './currentDeliveries';
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
          <Route path="/transport" exact component={CurrentDeliveries} />
        </Switch>
      </div>
    )
  }
}

export default Transport;
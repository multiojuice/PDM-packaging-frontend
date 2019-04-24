import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ButtonLink, RowFlex, Title, ButtonContainer } from '../baseComponents';
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
            <ButtonLink>Browse Deliveries</ButtonLink>
            <ButtonLink>Update Delivery</ButtonLink>
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
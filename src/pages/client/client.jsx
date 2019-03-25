import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
import CurrentDeliveries from './currentDeliveries';
class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <RowFlex>
          <Title>PDM Client</Title>
          <ButtonContainer>
            <Button>My Order</Button>
            <Button>Track Packages</Button>
          </ButtonContainer>
        </RowFlex>
        <Switch>
        <Route path="/client" exact component={CurrentDeliveries} />
        </Switch>
      </div>
    )
  }
}
export default Client;
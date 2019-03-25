import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
import NewOrder from './newOrder';
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
          <Route path="/clerk" exact component={NewOrder}/>
        </Switch>
      </div>
    )
  }
}

export default Clerk;
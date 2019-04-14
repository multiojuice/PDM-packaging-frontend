import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
import NewOrder from './newOrder';
import BrowseOrder from './browseOrder';
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
            <Button href='/clerk/browse'>Browse Orders</Button>
          </ButtonContainer>
        </RowFlex>
        <Switch>
          <Route path="/clerk" exact component={NewOrder}/>
          <Route path="/clerk/browse" component={BrowseOrder} />
        </Switch>
      </div>
    )
  }
}

export default Clerk;
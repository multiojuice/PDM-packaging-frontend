import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import { Button, RowFlex, Title, ButtonContainer } from '../baseComponents';
import CurrentDeliveries from './currentDeliveries';
import PackageViewer from './packageViewer';
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
            <NavLink to="/client" exact>
              <Button>My Order</Button>
            </NavLink>
          </ButtonContainer>
        </RowFlex>
        <Switch>
        <Route path="/client" exact component={CurrentDeliveries} />
        <Route path="/client/order/:id" component={PackageViewer} />
        </Switch>
      </div>
    )
  }
}
export default Client;
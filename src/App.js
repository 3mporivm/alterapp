import React from 'react';
import { Switch, Route } from 'react-router';
import * as screens from 'screens';

const App = () => (
	<div>
    <Switch>
      <Route path="/" component={screens.ChangePasswordScreen} />
    </Switch>
	</div>
);

export default App;

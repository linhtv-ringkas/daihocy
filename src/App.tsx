import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './features/home';
import WithLayout from './layout/withLayout';
const App: React.FC<{}>= ()=> {
  return (
    <Router>
      <Switch>
        <Route path="/" component={WithLayout(Home)} />
      </Switch>
    </Router>
  );
}

export default App;

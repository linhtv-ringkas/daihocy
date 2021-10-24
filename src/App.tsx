import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'features/home';
import WithLayout from 'layout/withLayout';
import Male from "features/male";
import Female from "features/female";
import Pregnant from 'features/pregnant';
import Children from "features/children";

const App: React.FC<{}>= ()=> {
  return (
    <Router>
      <Switch>
        <Route path="/male" component={WithLayout(Male)} />
        <Route path="/female" component={WithLayout(Female)} />
        <Route path="/pregnant" component={WithLayout(Pregnant)} />
        <Route path="/children" component={WithLayout(Children)} />
        {/*Home*/}
        <Route path="/" exact component={WithLayout(Home)} />
      </Switch>
    </Router>
  );
}

export default App;

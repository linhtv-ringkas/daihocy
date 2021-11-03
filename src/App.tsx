import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'features/home';
import WithLayout from 'layout/withLayout';
import Male from "features/male";
import Female from "features/female";
import Pregnant from 'features/pregnant';
import Children from "features/children";
import DetailLayout from "layout/detailLayout";

const App: React.FC<{}>= ()=> {
  return (
    <Router>
      <Switch>
        <Route path="/male" component={WithLayout(Male, DetailLayout)} />
        <Route path="/female" component={WithLayout(Female, DetailLayout)} />
        <Route path="/pregnant" component={WithLayout(Pregnant, DetailLayout)} />
        <Route path="/children" component={WithLayout(Children, DetailLayout)} />
        {/*Home*/}
        <Route path="/" exact component={WithLayout(Home)} />
      </Switch>
    </Router>
  );
}

export default App;

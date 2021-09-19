import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import AppHeader from "./components/AppHeader";
import LandingPage from "./components/LandingPage";
import AddRecordsForm from './components/AddRecordsForm';
// import "./App.css";

function App() {
  return (
    <div className="main-secction">
      <Route component={AppHeader} />
      <Switch>
        {/* Landing page Route */}
        <Route path="/" exact component={LandingPage} />
        {/* Route to use for records insertion. */}
        <Route path="/add-record" exact component={AddRecordsForm}/>
      </Switch>
    </div>
  );
}

export default App;

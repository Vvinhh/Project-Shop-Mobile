import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import homepage from "./layouts/admin/homepage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={homepage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

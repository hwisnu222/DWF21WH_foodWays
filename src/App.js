import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Index from "./pages/index";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <Switch>
        <div className="grey">
          <Route exact path="/" component={Index} />
          <Route exact path="/profile" component={UserProfile} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

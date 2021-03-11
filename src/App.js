import logo from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Index from "./pages/index";
import UserProfile from "./pages/UserProfile";
import Detail from "./pages/DetailProduct";

function App() {
  return (
    <Router>
      <Switch>
        <div className="grey">
          <Route exact path="/" component={Index} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/detail" component={Detail} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

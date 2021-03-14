import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// pages
import Index from "./pages/index";
import NotFound from "./pages/404";
import PrivateRoute from "./component/micro/PrivateRoute";

// User
import UserProfile from "./pages/UserProfile";
import CartUser from "./pages/CartUser";
import Detail from "./pages/DetailProduct";
import EditUserProfile from "./pages/EditUserProfile";

// Partner
import AddProduct from "./pages/addProduct";
import TransactionPartners from "./pages/TransactionPartners";
import PartnerProfile from "./pages/PartnerProfile";
import EditPartnerProfile from "./pages/EditPartnerProfile";

// test
import User from "./pages/User";

//Context
import { UserContextProvider } from "./context/userContext";
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    // context
    <CartContextProvider>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <PrivateRoute exact path="/user-profile" component={UserProfile} />
            <PrivateRoute exact path="/cart" component={CartUser} />
            <PrivateRoute
              exact
              path="/edit-user-profile"
              component={EditUserProfile}
            />
            <Route exact path="/products" component={Detail} />

            {/* partner */}
            <PrivateRoute exact path="/add-product" component={AddProduct} />
            <PrivateRoute
              exact
              path="/transaction"
              component={TransactionPartners}
            />
            <PrivateRoute
              exact
              path="/partner-profile"
              component={PartnerProfile}
            />
            <PrivateRoute
              exact
              path="/edit-partner-profile"
              component={EditPartnerProfile}
            />

            <Route exact path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;

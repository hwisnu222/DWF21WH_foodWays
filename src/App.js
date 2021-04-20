import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { setAuthToken, API_BASE } from "./config/api";

import { UserContext } from "./context/userContext";
import { RoleContext } from "./context/roleContext";

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

import { CartContextProvider } from "./context/cartContext";
import { LocationContextProvider } from "./context/locationContext";

const client = new QueryClient();

//inisialisasi axios setiap kali direfresh
if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log("auth");
  console.log(localStorage.token);
}
function App() {
  const [state, dispatch] = useContext(UserContext);
  const [role, dispatchRole] = useContext(RoleContext);

  const checkToken = async () => {
    try {
      const response = await API_BASE.get("/auth");

      if (response.status !== 200) {
        return console.log("tidak bisa mengidentifikasi");
      }

      dispatch({ type: "LOGIN" });

      const { role } = response.data.data.user;

      if (role == "user") {
        return dispatchRole({ type: "USER" });
      } else if (role == "partner") {
        return dispatchRole({ type: "PARTNER" });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGOUT" });
      console.log("user logout");
    }
    console.log("User is login?", state.isLogin);
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    // context
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <LocationContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Index} />
              <PrivateRoute
                exact
                path="/user-profile"
                component={UserProfile}
              />
              <PrivateRoute exact path="/cart" component={CartUser} />
              <PrivateRoute
                exact
                path="/edit-user-profile"
                component={EditUserProfile}
              />
              <Route
                exact
                path="/products/:idPartner/:partner"
                component={Detail}
              />

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
        </LocationContextProvider>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;

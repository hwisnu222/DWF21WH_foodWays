import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Cart from "../component/macro/Cart";
import EditProfile from "../component/macro/EditProfile";

// Component
import HeaderUser from "../component/micro/HeaderAdmin";

export default function User() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <HeaderUser />
      <Route exact path={path}>
        <Cart />
      </Route>
      <Route exact path={`${path}/edit`}>
        <EditProfile />
      </Route>
    </div>
  );
}

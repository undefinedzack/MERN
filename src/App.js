import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddCustomer from "./Components/AddCustomer";
import Home from "./Components/Home";

import "./App.css";
import EditCustomer from "./Components/EditCustomer";
import Cake from "./Components/Cake";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/"} exact component={Cake} />
          {/* <Route path={"/"} exact component={Home} /> */}
          <Route path={"/addCustomer"} exact component={AddCustomer} />
          <Route path={"/editCustomer/:id"} exact component={EditCustomer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

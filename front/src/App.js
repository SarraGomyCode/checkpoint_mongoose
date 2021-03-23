import { Switch, Route } from "react-router";

import NavBar from "./Component/NavBar";
import Add from "./Pages/Add";
import Home from "./Pages/Home";
import ContactList from "./Pages/ContactList";
import Errors from "./Pages/Errors";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Switch>
        <Route exact path="/contacts" component={ContactList} />
        <Route path={["/add", "/edit"]} component={Add} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>
  );
}

export default App;

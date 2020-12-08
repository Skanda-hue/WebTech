import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Auth from "./context/store/Auth";
import Main from "./pages/Main";
import Homepage from "./pages/Homepage";
// import other pages as well

function App() {
  return (
    <Auth>
      <BrowserRouter>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/Main" exact component={Main} />
          <Route path="/Homepage" exact component={Homepage} />
          {/* <Route path="/path" exact component={component name} /> */}
        </Switch>
      </BrowserRouter>
    </Auth>
  );
}

export default App;

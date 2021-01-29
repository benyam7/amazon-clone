import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* /checkout/:someId/page */}
          <Route path="/checkout/">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* this is the default one, so like if user goes to 
          some undefined path it will redirect him to home page */}
          <Route path="/">
            <Header />
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>

            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>

            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>

            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>

            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
            <h1>Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
